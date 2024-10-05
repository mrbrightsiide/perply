import styled from '@emotion/styled';
import { FloatButton } from '@/components/atom/FloatButton';
import { BackBtnHeader } from '@/components/atom/BackBtnHeader';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IPlaylistData } from '@/types';
import { CreateForm } from '@/components/card/CreateForm';
import { ColorChip, colorChips } from '@/components/card/ColorChip';
import { ColoredBackground } from '@/components/atom/ColoredBackground';
import { createMusicCard } from '@/apis';

const Index = () => {
  const router = useRouter();
  const { from, title, singer, id, albumart_url, userId } = router.query;
  const [info, setInfo] = useState<IPlaylistData>({
    user_name: '',
    playlist_id: 0,
    content: '',
    albumart_url: albumart_url as string,
    youtube_url: `https://www.maniadb.com/popup/youtube/${id}`,
    title: title as string,
    singer: singer as string,
    maniadb_id: id as string,
  });

  const onGoBackHeader = () => {
    if (from === 'create') {
      router.push({
        pathname: '/search/create',
        query: { title, singer, id, userId },
      });
    } else {
      router.back();
    }
  };

  return (
    <>
      <BackBtnHeader
        title='음악 카드 작성'
        onGoBack={onGoBackHeader}
        background='#f4f5f5'
      />
      <ColoredBackground color='#f4f5f5' />
      <PageWrapper>
        <Tape />
        <ColorChip selectedColor={colorChips[0]} />
        <CreateForm info={info} setInfo={setInfo} />
      </PageWrapper>
      <FloatButton
        title='음악 카드 보내기'
        disabled={
          !(info.user_name && info.playlist_id && info.title && info.singer)
        }
        onClick={async () => {
          // 카드 생성 API 호출
          await createMusicCard('b61fb2', info.playlist_id, {
            user_name: info.user_name,
            singer: info.singer,
            title: info.title,
            youtube_url: info.youtube_url,
            content: info.content,
            alubmart_url: 'http://' + info.albumart_url,
            color: colorChips[0].name,
            playlist_id: info.playlist_id,
          });
          // 카드 생성 성공 시, 카드 보내기 완료 페이지로 이동
          router.push({
            pathname: '/create_card/complete',
            query: {
              userId,
            },
          });
        }}
      />
    </>
  );
};

const PageWrapper = styled.div`
  padding: 56px 20px 100px 20px;
`;

const Tape = styled.div`
  width: 273px;
  height: 168px;
  border-radius: 16px;
  background-color: pink;
  margin: 40px auto 32px auto;
`;

export default Index;
