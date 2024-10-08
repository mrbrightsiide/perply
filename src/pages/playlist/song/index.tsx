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
import { getMusicCardDetail } from '@/apis';
import { colorChips } from '@/components/card/ColorChip';
import { useSession } from 'next-auth/react';

const index = () => {
  const router = useRouter();
  const { shared, id, playlistId, userId } = router.query;
  const { data: session } = useSession();

  const [song, setSong] = useState<ITape | null>(null);
  const [youtubeOpen, setYoutubeOpen] = useState(false);

  const isMine = session?.user.uuid === userId;

  const getSongs = async () => {
    try {
      const res = await getMusicCardDetail(
        userId as string,
        Number(playlistId),
        Number(id)
      );
      setSong(res);
    } catch (error) {
      console.error(error);
    }
  };

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
    getSongs();
  }, []);

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
            <AlbumComver>
              <img
                src={song?.albumart_url}
                alt=''
                css={css`
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                `}
              />
            </AlbumComver>
            <div>
              <SongTitle>{song?.title}</SongTitle>
              <Artist>{song?.singer}</Artist>
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
      {!shared && (
        <BackBtnHeader
          background={
            colorChips.find((color) => color.name === song?.color)
              ?.songBgColor ||
            colorChips.find((color) => color.name === song?.color)
              ?.listBgColor ||
            colorChips.find((color) => color.name === song?.color)?.color
          }
        />
      )}
      <ColoredBackground
        color={
          colorChips.find((color) => color.name === song?.color)?.songBgColor ||
          colorChips.find((color) => color.name === song?.color)?.listBgColor ||
          colorChips.find((color) => color.name === song?.color)?.color
        }
      />
      <Wrapper>
        <Title>
          <span>{song?.user_name}</span>
          님이 선택한
        </Title>
        <SubTitle>{session?.user.nickname}님의 분위기와 어울리는 노래</SubTitle>
        <ContentBox>
          <InnerShadow>
            <InnerShadow2>
              <InnerShadow3
                css={css`
                  border-radius: 30px;
                  padding: 28px 30px;
                `}
              >
                {song?.color && (
                  <Image
                    src={`/images/song/${song?.color}.png`}
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
                  <div
                    css={css`
                      text-align: center;
                    `}
                  >
                    <span onClick={() => setYoutubeOpen(false)}>
                      <img
                        src='/images/back.png'
                        alt=''
                        css={css`
                          transform: rotate(90deg);
                          width: 15px;
                          height: 15px;
                          cursor: pointer;
                          margin: 0 auto;
                        `}
                      />
                    </span>
                    <Line />
                    {song?.youtube_url}
                    {/* <iframe
                      src={song?.youtube_url}
                      width='100%'
                      height={250}
                      frameBorder={0}
                    /> */}
                  </div>
                )}
                {song?.content && (
                  <Msg>
                    <From>
                      <FromIco />
                      <span>{song.user_name}</span>
                    </From>
                    <p>{song.content}</p>
                  </Msg>
                )}
              </InnerShadow3>
            </InnerShadow2>
          </InnerShadow>
        </ContentBox>
      </Wrapper>
      {isMine ? (
        <FloatButton
          title='음악 카드 링크 공유하기'
          style={{
            bg: '#fff',
            color: '#222222',
            maxWidth: '235px',
          }}
          onClick={() => copyText()}
        />
      ) : (
        <>
          <FloatButton
            title='내 플리 만들기'
            style={{
              bg: colorChips.find((color) => color.name === song?.color)?.color,
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
  padding: 56px 20px 100px 20px;
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
  margin-top: 20px;
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
