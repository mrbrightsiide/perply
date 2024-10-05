import { BasicButton } from '@/components/atom/BasicButton';
import { ColoredBackground } from '@/components/atom/ColoredBackground';
import { colorChips } from '@/components/card/ColorChip';
import { TapeListPreview } from '@/components/home/TapeListPreview';
import { tapeDummyData } from '@/types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const Index = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { userName } = router.query as { userName: string };
  const isMyHome = userName === session?.user?.nickname;
  const isEmpty = false;

  useEffect(() => {
    if (session?.user) {
      console.log('$$$ userId: ', session.user?.id);
      console.log('$$$ userUuid: ', session.user?.uuid);
      console.log('$$$ nickname: ', session.user?.nickname);
      console.log('$$$ profileImage: ', session.user?.profileImage);
      console.log('$$$ created: ', session.user?.created);
    }
  }, [session]);

  useEffect(() => {
    console.log('$$$ userName: ', userName);
  }, [userName]);

  return (
    <>
      <PaddingWrap>
        <Header>{isMyHome ? <span>home</span> : <span>로그인</span>}</Header>
        <Title>
          {userName}님의{'\n'}뮤직 보관함
        </Title>
      </PaddingWrap>
      <Wrapper>
        <ColoredBackground color='#141414' />
        <Swiper
          slidesPerView={1.14}
          spaceBetween={12}
          slidesOffsetAfter={20}
          slidesOffsetBefore={20}
        >
          {[
            {
              name: '친구들이 느끼는 나의\n분위기와 어울리는 노래',
              color: 'lime',
              count: 0,
              id: 1,
            },
            {
              name: '친구들이 느끼는 나의\n분위기와 어울리는 노래',
              color: 'blue',
              count: 0,
              id: 2,
            },
            {
              name: '친구들이 느끼는 나의\n분위기와 어울리는 노래',
              color: 'mint',
              count: 0,
              id: 3,
            },
            {
              name: '친구들이 느끼는 나의\n분위기와 어울리는 노래',
              color: 'purple',
              count: 0,
              id: 4,
            },
          ].map((item) => (
            <SwiperSlide key={item.id}>
              <Tape
                background={
                  colorChips.find(({ name }) => name === item.color)?.color ||
                  'white'
                }
                onClick={() =>
                  router.push({
                    pathname: '/my_home/detail',
                    query: { id: item.id },
                  })
                }
              >
                <TapeInfo>
                  <p>{item.name}</p>
                  <div
                    className='count'
                    css={css`
                      color: ${colorChips.find(
                        ({ name }) => name === item.color
                      )?.color || 'black'};
                    `}
                  >
                    {item?.count || 0}개의 곡
                  </div>
                </TapeInfo>
              </Tape>
            </SwiperSlide>
          ))}
        </Swiper>
        <PaddingWrap>
          <CardListTitle>
            <span>
              <span>0</span>개의 음악 카드
            </span>
            {!isEmpty && <span className='more'>더보기 {'>'}</span>}
          </CardListTitle>
          {isEmpty ? (
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
                onClick={() => router.push('/search')}
              />
            </CardList>
          ) : (
            <TapeListPreview data={tapeDummyData} />
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

const Tape = styled.div<{ background: string }>`
  width: 100%;
  height: 206px;
  background: ${({ background }) => background};
  border-radius: 20px;
  margin-top: 36px;
  display: flex;
  cursor: pointer;
`;

const Header = styled.div`
  width: 100%;
  height: 56px;
  color: #fff;
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
  margin-top: 60px;
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
  .count {
    background-color: #141414;
    padding: 4px 8px;
    border-radius: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: min-content;
    align-self: flex-end;
  }
`;
