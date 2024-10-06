import styled from '@emotion/styled';
import { BackBtnHeader } from '@/components/atom/BackBtnHeader';
import { ColoredBackground } from '@/components/atom/ColoredBackground';
import { FolderCount, SortingBox } from '@/components/atom/Folder';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { recommendSongs } from '@/apis';

const index = () => {
  const router = useRouter();
  const { userId } = router.query as { userId: string };
  const [sort, setSort] = useState<'old' | 'new'>('old');
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const arr = [...recommendSongs].sort((a, b) => {
      if (sort === 'old') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
    setData(arr);
  }, [sort, recommendSongs]);

  return (
    <>
      <BackBtnHeader background='#141414' title='받은 음악 카드' color='#fff' />
      <ColoredBackground color='#141414' />
      <Wrapper>
        <IndexBox>
          <FolderCount
            position={{
              top: '4px',
              left: '0px',
            }}
            count={data.length}
          />
          <SortingBox
            activeSort={sort}
            onSort={(sort) => setSort(sort)}
            position={{
              top: '0px',
              right: '0px',
            }}
          />
        </IndexBox>
        <CardBoxWrap>
          {data.map((item) => (
            <ItemBox
              onClick={() =>
                router.push({
                  pathname: '/playlist/song',
                  query: { id: item.id, userId },
                })
              }
            >
              <Letter>
                <Image
                  src={`/images/playlist/${item.is_read ? 'read' : 'notRead'}_${
                    item.color
                  }.png`}
                  alt='letter'
                  width={85}
                  height={75}
                />
              </Letter>
              <InfoWrap>
                <div>
                  <SongTitle>{item.title}</SongTitle>
                </div>
                <From>From. {item.user_name}</From>
              </InfoWrap>
            </ItemBox>
          ))}
        </CardBoxWrap>
      </Wrapper>
    </>
  );
};

export default index;

const IndexBox = styled.div`
  height: 20px;
  position: relative;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  margin-top: 32px;
`;

const Wrapper = styled.div`
  padding: 56px 20px 0 20px;
`;

const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-direction: column;
  padding: 14px 26px 14px 16px;
  height: 100%;
  align-self: stretch;
  text-align: right;
`;

const SongTitle = styled.p`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: #fff;
`;

const From = styled.p`
  font-size: 14px;
  color: #999;
  margin-top: 6px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const ItemBox = styled.div`
  background: #222222;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  cursor: pointer;
`;

const Letter = styled.div`
  width: 85px;
  height: 75px;
`;

const CardBoxWrap = styled.div`
  display: grid;
  row-gap: 16px;
  margin-top: 52px;
`;
