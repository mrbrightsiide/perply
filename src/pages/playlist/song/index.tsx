import styled from '@emotion/styled';
import { ColoredBackground } from '@/components/atom/ColoredBackground';
import { FloatButton } from '@/components/atom/FloatButton';
// import { colorChips } from '@/components/card/ColorChip';
import { theme } from '@/styles/theme.d';
import { ITape, tapeDummyData } from '@/types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FromIco from '@/../public/images/from.svg';
import { BackBtnHeader } from '@/components/atom/BackBtnHeader';
import Image from 'next/image';
import { css } from '@emotion/react';

const index = () => {
  const router = useRouter();
  const { shared, id } = router.query;
  const [song, setSong] = useState<ITape | null>(null);
  const [color, setColor] = useState<string | null>(null);
  const [youtubeOpen, setYoutubeOpen] = useState(false);

  const func = async () => {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve('blue');
      }, 400);
    });
  };

  const getSongColor = async () => {
    const color = await func();
    setColor(color as string);
  };

  useEffect(() => {
    // getSong();
    getSongColor();
  }, []);

  const getSong = async () => {
    try {
      const res = await fetch(`/api/songs/${id}`);
      const data = await res.json();
      setSong(data);
    } catch (error) {
      console.error(error);
    }
  };

  const songBox = (
    <InnerShadow
      css={css`
        background-color: #f1f1f5;
        margin-top: 60px;
        border-radius: 16px;
      `}
    >
      <InnerShadow2
        css={css`
          border-radius: 16px;
        `}
      >
        <InnerShadow3
          css={css`
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 14px 20px 14px 20px;
          `}
        >
          <div
            css={css`
              display: flex;
              column-gap: 14px;
              justify-content: flex-start;
              align-items: center;
              width: 100%;
              margin-bottom: 10px;
              position: relative;
            `}
          >
            <Image
              src={`/images/equalizer.png`}
              alt='My Image'
              width={24}
              height={28}
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
              }}
            />
            <AlbumComver></AlbumComver>
            <div>
              <SongTitle>{tapeDummyData[0].title}</SongTitle>
              <Artist>{tapeDummyData[0].singer}</Artist>
            </div>
          </div>
          <Image
            src={`/images/playng-bar.png`}
            alt='My Image'
            width={239}
            height={29}
            style={{}}
          />
        </InnerShadow3>
      </InnerShadow2>
    </InnerShadow>
  );

  return (
    <>
      {!shared && <BackBtnHeader background='#DFCEFF' />}
      <ColoredBackground
        // color={colorChips.find((color) => color.name === song?.color)?.color}
        color='#DFCEFF'
      />
      <Wrapper>
        <Title>
          <span>발라드러버사슴</span>
          님이 선택한
        </Title>
        <SubTitle>케이팝듣는여우님의 분위기와 어울리는 노래</SubTitle>
        <ContentBox>
          <InnerShadow>
            <InnerShadow2>
              <InnerShadow3
                css={css`
                  border-radius: 30px;
                  padding: 28px 30px;
                `}
              >
                {color && (
                  <Image
                    src={`/images/song/${color}.png`}
                    alt='My Image'
                    width={304}
                    height={141}
                    style={{
                      position: 'absolute',
                      zIndex: 10,
                      top: -(141 / 2.7),
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  />
                )}
                {songBox}
                <Image
                  src={`/images/youtube_btn.png`}
                  alt='My Image'
                  width={118}
                  height={42}
                  style={{
                    margin: '12px auto 24px auto',
                    alignSelf: 'center',
                    display: 'block',
                    cursor: 'pointer',
                  }}
                  onClick={() => setYoutubeOpen(true)}
                />
                {youtubeOpen && (
                  <div>
                    <span onClick={() => setYoutubeOpen(false)}>접기</span>
                    <Line />
                  </div>
                )}
                <Msg>
                  <From>
                    <FromIco />
                    <span>짱구리</span>
                  </From>
                  <p>
                    샬라샬라 이러한 이유에서 이 노래가 너랑 어울리는 거 같아
                    이러한 이유에서 이 노래가 너랑 어울리는 거 같아 다음에
                    콘서트 같이 가자 샬라샬라 이러한 이유에서 이 노래가 너랑
                    어울리는 거 같아 이러한 이유에서 이 노래가 너랑 어울리는 거
                    같아 다음에 콘서트 같이 가자
                  </p>
                </Msg>
              </InnerShadow3>
            </InnerShadow2>
          </InnerShadow>
        </ContentBox>
      </Wrapper>
      {/* {shared ? ( */}
      {true ? (
        <>
          <FloatButton
            title='내 플리 만들기'
            style={{
              bg: theme.primary[600],
              color: '#fff',
              maxWidth: '161px',
              right: '51%',
            }}
            onClick={() => {}}
          />
          <FloatButton
            title='둘러보기'
            style={{
              bg: '#fff',
              color: '#222222',
              maxWidth: '161px',
              left: '51%',
            }}
            onClick={() => {}}
          />
        </>
      ) : (
        <FloatButton
          title='음악 카드 링크 공유하기'
          style={{
            bg: '#fff',
            color: '#222222',
            maxWidth: '235px',
          }}
          onClick={() => {}}
        />
      )}
    </>
  );
};

export default index;

const Title = styled.h1`
  margin-top: 16px;
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  span {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-top: 3px;
`;

const Wrapper = styled.div`
  padding: 56px 20px 0 20px;
`;

const Msg = styled.div`
  background-color: #f5f3ef;
  border-radius: 4px;
  padding: 16px 20px 14px 20px;
  color: #000;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  line-height: 20px;
`;

const ContentBox = styled.div`
  background-color: #fff;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: calc(29px + 141px / 2.7);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
`;

const InnerShadow = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: inset -3px -2px 6px rgba(0, 0, 0, 0.04);
  border-radius: 30px;
`;

const InnerShadow2 = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: inset -3px -2px 6px rgba(0, 0, 0, 0.08);
  border-radius: 30px;
`;

const InnerShadow3 = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: inset 4px 4px 6px #efefef;
  border-radius: 30px;
`;

const From = styled.div`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-bottom: 5px;
  column-gap: 4px;
  display: flex;
  align-items: center;

  > span {
    display: inline-block;
  }
`;

const AlbumComver = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 7px;
  overflow: hidden;
  object-fit: cover;
  background-color: pink;
`;

const Artist = styled.p`
  font-size: 14px;
  color: #111;
  margin-top: 6px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

const SongTitle = styled.p`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: #111;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #f1f1f5;
  margin: 20px 0;
`;
