import { BasicButton } from '@/components/atom/BasicButton';
import { ColoredBackground } from '@/components/atom/ColoredBackground';
import { TapeListPreview } from '@/components/home/TapeListPreview';
import { tapeDummyData } from '@/types';
import styled from '@emotion/styled';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const Index = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { userName } = router.query as { userName: string };
  const isMyHome = userName === session?.user?.nickname;
  const isEmpty = true;

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
          {userName}님의{'\n'}플리 보관함
        </Title>
        <Swiper
          slidesPerView={1.14}
          spaceBetween={12}
          slidesOffsetAfter={20}
          slidesOffsetBefore={20}
        >
          {[
            {
              name: '친구들이 느끼는 나의\n분위기와 어울리는 노래',
              count: 0,
              id: 1,
            },
            {
              name: '친구들이 느끼는 나의\n분위기와 어울리는 노래',
              count: 0,
              id: 2,
            },
            {
              name: '친구들이 느끼는 나의\n분위기와 어울리는 노래',
              count: 0,
              id: 3,
            },
            {
              name: '친구들이 느끼는 나의\n분위기와 어울리는 노래',
              count: 0,
              id: 4,
            },
          ].map((item, idx) => (
            <SwiperSlide key={item.id}>
              <Tape
                onClick={() =>
                  router.push({
                    pathname: '/playlist/detail',
                    query: { id: item.id },
                  })
                }
              >
                <TapeInfo>
                  <p>{item.name}</p>
                  <TransBtn>
                    <span>{item?.count || 0}개의 곡</span>
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
              <span>0개의 음악 카드</span>
            </span>
            {!isEmpty && (
              <span
                onClick={() => router.push('/playlist/all')}
                className='more'
              >
                더보기 {'>'}
              </span>
            )}
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
            <OverFlowBox>
              <TapeListPreview data={tapeDummyData} />
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
