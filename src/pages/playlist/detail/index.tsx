import styled from '@emotion/styled';
import { BackBtnHeader } from '@/components/atom/BackBtnHeader';
import { css } from '@emotion/react';
import { Folder } from '@/components/atom/Folder';
import { ColoredBackground } from '@/components/atom/ColoredBackground';
import { useEffect, useState } from 'react';
import { getPlaylistDetails, IPlaylistDetailResponse } from '@/apis';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  const { id, userId } = router.query;
  const [playlistDetail, setPlaylistDetail] =
    useState<IPlaylistDetailResponse | null>(null);

  const getPlaylistDetail = async () => {
    if (id && userId) {
      const res = await getPlaylistDetails(userId as string, Number(id));
      setPlaylistDetail(res);
    }
  };

  useEffect(() => {
    getPlaylistDetail();
  }, []);

  return (
    <>
      <BackBtnHeader background='#141414' whiteArrow />
      <ColoredBackground color='#141414' />
      <Wrapper>
        <Title>{playlistDetail?.playlist.playlist_title}</Title>
        <Desc>
          친구들이 나를 떠올리며 보내준 노래를
          {'\n'}모아 만든 플레이리스트에요
        </Desc>
        <Folder
          count={playlistDetail?.recommended_songs?.length || 0}
          data={playlistDetail?.recommended_songs}
        />
      </Wrapper>
    </>
  );
};

export default Index;

const Title = styled.h1`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: #fff;
  margin-top: 16px;
  line-height: 38px;
`;

const Wrapper = styled.div`
  padding: 56px 20px 0 20px;
  white-space: pre-line;
  overflow-y: hidden;
`;

const Desc = styled.p`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.font.gray_04};
  line-height: 25px;
  margin-top: 8px;
`;
