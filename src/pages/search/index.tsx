'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import axios from 'axios';
import { parseString } from 'xml2js';
import { BackBtnHeader } from '@/components/atom/BackBtnHeader';
import { FloatButton } from '@/components/atom/FloatButton';
import { SearchMusicCard } from '@/components/search/SearchMusicCard';
import styled from '@emotion/styled';
import { SearchMusicInput } from '@/components/search/SearchMusicInput';
import { useRouter } from 'next/router';
import { ColoredBackground } from '@/components/atom/ColoredBackground';

export default function Search() {
  const router = useRouter();
  const fetchMusicSearch = async (params: {
    keyword: string;
    sr?: 'album' | 'song' | 'artist';
  }) => {
    const { keyword, sr = 'song' } = params;

    const res = await axios.get(
      `maniadbapi/search/${keyword}/?sr=${sr}&display=10&v=0.5&key=devkimsia@gmail.com`
    );
    return parseString(res.data, function (_err, result) {
      setResult(result);
      console.log(result);
    });
  };

  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState<any>();
  const [openIframe, setOpenIframe] = useState(false);
  const [selectedMusic, setSelectedMusic] = useState<any>();

  const noResult = result?.rss?.channel?.[0]?.total?.[0] === '0';

  return (
    <>
      <BackBtnHeader title='음악 검색' />
      <ColoredBackground />
      <PageWrapper>
        <Space />
        <SearchMusicInput
          onChange={(e) => setKeyword(e.target.value)}
          fetchMusicSearch={() => fetchMusicSearch({ keyword })}
        />
        <CenterBox align={noResult || !result ? 'center' : 'flex-start'}>
          {noResult && (
            <>
              <NoResultImg />
              <CreateMusicTxt>검색 결과가 없습니다</CreateMusicTxt>
            </>
          )}
          <CreateMusicBox>
            <CreateMusicTxt>노래를 직접 등록하고 싶으신가요?</CreateMusicTxt>
            <CreateMusicBtn onClick={() => router.push('/search/create')}>
              <span className='icon'></span>
              <span className='title'>직접 음악 추가하기</span>
            </CreateMusicBtn>
          </CreateMusicBox>
          <ResultBox>
            {result?.rss?.channel?.[0]?.item?.map((item: any, idx: any) => (
              <SearchMusicCard
                key={idx}
                item={item}
                checked={selectedMusic === idx + 1}
                onChangeCheckBox={() =>
                  setSelectedMusic(selectedMusic === idx + 1 ? null : idx + 1)
                }
                openIframe={openIframe === idx}
                onClickOpenIframe={() =>
                  setOpenIframe(openIframe === idx ? false : idx)
                }
              />
            ))}
          </ResultBox>
        </CenterBox>
        <Space />
      </PageWrapper>
      <FloatButton
        title='선택한 음악 추가하기'
        disabled={!selectedMusic}
        onClick={() =>
          router.push({
            pathname: '/search/create',
            query: {
              title:
                result?.rss?.channel?.[0]?.item?.[selectedMusic - 1]
                  ?.title?.[0],
              singer:
                result?.rss?.channel?.[0]?.item?.[selectedMusic - 1]
                  ?.artist?.[0],
              id: result?.rss?.channel?.[0]?.item?.[selectedMusic - 1]
                ?.maniadb_id?.[0],
            },
          })
        }
      />
    </>
  );
}

const PageWrapper = styled.div`
  padding: 0 20px;
  padding-top: 56px;
`;

const Space = styled.div`
  height: 20px;
`;

const CreateMusicBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 20px 0 24px 0;
`;

const CreateMusicTxt = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.font.gray_03};
`;

const CreateMusicBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 8px 9px 8px 16px;
  border: 1px solid ${({ theme }) => theme.font.gray_03};
  border-radius: 100px;
  margin-top: 12px;

  span.icon {
    width: 20px;
    height: 20px;
    display: inline-block;
    background-color: pink;
  }
  span.title {
    display: inline-block;
    margin-left: 5px;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.font.gray_02};
  }
`;

const NoResultImg = styled.div`
  width: 154px;
  height: 87px;
`;

const CenterBox = styled.div<{
  align: 'center' | 'flex-start' | 'flex-end';
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ align }) => align};
  align-items: center;
  flex: 1;
`;

const ResultBox = styled.div`
  width: 100%;
  padding-bottom: 80px;
`;
