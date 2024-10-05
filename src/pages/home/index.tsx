import { getAllPlaylists, getSongCardList } from '@/apis';
import { BasicButton } from '@/components/atom/BasicButton';
import { ColoredBackground } from '@/components/atom/ColoredBackground';
import { TapeListPreview } from '@/components/home/TapeListPreview';
import { IPlayList, ITape } from '@/types';
import styled from '@emotion/styled';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const Index = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const userId = session?.user?.uuid;
  const [playListPreview, setPlayListPreview] = useState<IPlayList[] | null>(
    null
  );
  const [songCardList, setSongCardList] = useState<{
    total_music_cards: number;
    recommended_songs: ITape[];
  } | null>(null);
  const [isMyHome, setIsMyHome] = useState(false);

  useEffect(() => {
    (async () => {
      const playList = await getAllPlaylists(
        (userId as any) || session?.user.uuid
      );
      setPlayListPreview(playList);
      const songList = await getSongCardList(
        (userId as any) || session?.user.uuid
      );
      songList && setSongCardList(songList);
    })();
    console.log('userId: ', userId);
  }, [userId]);

  const copyText = () => {
    const textToCopy =
      'https://perply.vercel.app/home?userId=' + session?.user.uuid;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() =>
        alert('클립보드에 링크가 복사되었습니다\n친구에게 공유해보세요!')
      )
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  useEffect(() => {
    setIsMyHome(session?.user.uuid === userId);
  }, [session]);

  return (
    <>
      <PaddingWrap>
        <Header>
          <img
            src={'/images/logo/logo.png'}
            alt='logo'
            style={{ maxWidth: '122px', marginLeft: '-30px' }}
          />
          {isMyHome ? <span>마이페이지</span> : <span>로그인</span>}
        </Header>
      </PaddingWrap>
      <Wrapper>
        <ColoredBackground color='#141414' />
        <Title>
          {session?.user.nickname}님의{'\n'}플리 보관함
          {/* <button onClick={() => signOut()}>로그아웃</button> */}
        </Title>
        <Swiper
          slidesPerView={1.14}
          spaceBetween={12}
          slidesOffsetAfter={20}
          slidesOffsetBefore={20}
        >
          {playListPreview &&
            playListPreview?.length &&
            playListPreview.map((item, idx) => (
              <SwiperSlide key={item.id}>
                <Tape
                  onClick={() =>
                    router.push({
                      pathname: '/playlist/detail',
                      query: { id: item.id, userId },
                    })
                  }
                >
                  <TapeInfo>
                    <p>
                      {isMyHome
                        ? item.playlist_title
                        : item.playlist_title_other || item.playlist_title}
                    </p>
                    <TransBtn>
                      <span>{(item as any)?.total_songs || 0}개의 곡</span>
                    </TransBtn>
                  </TapeInfo>
                  <Image
                    src={`/images/main/big_tape/no${idx + 1}.png`}
                    alt='My Image'
                    width={348}
                    height={235}
                    style={{
                      position: 'absolute',
                      top: '25px',
                      left: '-10px',
                      bottom: 0,
                      zIndex: -1,
                    }}
                  />
                </Tape>
              </SwiperSlide>
            ))}
        </Swiper>
        <PaddingWrap>
          <CardListTitle>
            <span>
              <span>{songCardList?.total_music_cards}개의 음악 카드</span>
            </span>
            {songCardList && (
              <span
                onClick={() =>
                  router.push({
                    pathname: '/playlist/song',
                    query: { userId },
                  })
                }
                className='more'
              >
                더보기 {'>'}
              </span>
            )}
          </CardListTitle>
          {!songCardList?.recommended_songs?.length || !songCardList ? (
            <CardList>
              <Empty>
                {isMyHome
                  ? '링크를 공유하고 친구에게\n음악카드를 받아보세요'
                  : '친구를 떠올리면 생각나는\n노래를 뮤직 카드에 담아 보내주세요'}
              </Empty>
              <BasicButton
                text={
                  isMyHome
                    ? '친구에게 링크 공유하기'
                    : '첫 번째로 노래 추천하기'
                }
                buttonStyle={{ width: '190px' }}
                onClick={() =>
                  isMyHome
                    ? copyText()
                    : router.push({
                        pathname: '/search',
                        query: { userId },
                      })
                }
              />
            </CardList>
          ) : (
            <OverFlowBox>
              {songCardList?.recommended_songs && (
                <TapeListPreview data={songCardList.recommended_songs} />
              )}
            </OverFlowBox>
          )}
        </PaddingWrap>
      </Wrapper>
    </>
  );
};

export default Index;

const Title = styled.h1`
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: #fff;
  white-space: pre-line;
  line-height: 42px;
`;

const Wrapper = styled.div`
  padding-top: 40px;
`;

const Tape = styled.div`
  width: 100%;
  height: 206px;
  border-radius: 20px;
  margin-top: 36px;
  display: flex;
  cursor: pointer;
`;

const Header = styled.div`
  width: 100%;
  height: 56px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PaddingWrap = styled.div`
  padding: 0 20px;
  margin-bottom: 15px;
`;

const CardList = styled.div`
  border-radius: 28px;
  border: 1px solid #252525;
  padding: 48px 0 44px 0;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardListTitle = styled.div`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.font.gray_04};
  margin-top: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span.more {
    cursor: pointer;
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.font.gray_04};
  }
`;

const Empty = styled.div`
  color: #fff;
  text-align: center;
  white-space: pre-line;
  line-height: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin-bottom: 10px;
`;

const TapeInfo = styled.div`
  display: flex;
  padding: 20px 16px;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  width: 100%;

  p {
    flex: 1;
    white-space: pre-line;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    line-height: 24px;
    color: #161616;
    font-size: 16px;
    margin-bottom: -5px;
  }
`;

const TransBtn = styled.div`
  padding: 4px 8px;
  border-radius: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: min-content;
  align-self: flex-end;
  background-color: #161616; /* Solid background color */

  > span {
    color: #fff;
  }
`;

const OverFlowBox = styled.div`
  overflow-y: auto;
  max-height: 310px;
  /* scrollbar hide */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
