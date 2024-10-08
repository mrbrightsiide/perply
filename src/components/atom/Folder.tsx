import styled from '@emotion/styled';
import FolderSvg from '@/../public/images/folder.svg';
import { BasicButton } from './BasicButton';
import { useRouter } from 'next/router';
import { TapeListDetail } from '../home/TapeListDetail';
import { ITape } from '@/types';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

export const SortingBox = ({
  onSort,
  activeSort,
  position,
}: {
  onSort: (sortType: 'old' | 'new') => void;
  activeSort: 'old' | 'new';
  position?: { top?: string; right?: string };
}) => {
  return (
    <SortBox
      css={css`
        top: ${position?.top || '56px'};
        right: ${position?.right || '20px'};
      `}
    >
      <span
        onClick={() => onSort('old')}
        css={css`
          color: ${activeSort === 'old' ? '#DCF333' : '#fff'};
          font-weight: ${activeSort === 'old' ? 600 : 400};
        `}
      >
        오래된순
      </span>
      <span
        onClick={() => onSort('new')}
        css={css`
          color: ${activeSort === 'new' ? '#DCF333' : '#fff'};
          font-weight: ${activeSort === 'new' ? 600 : 400};
        `}
      >
        최신순
      </span>
    </SortBox>
  );
};

export const FolderCount = ({
  count,
  position,
}: {
  count: number;
  position?: { top?: string; left?: string };
}) => {
  return (
    <FolderIndex
      css={css`
        top: ${position?.top || '20px'};
        left: ${position?.left || '20px'};
      `}
    >
      {count}개의 곡
    </FolderIndex>
  );
};

export const Folder = ({
  count = 0,
  data,
}: {
  count: number;
  data?: ITape[];
}) => {
  const router = useRouter();
  const { userId } = router.query as { userId: string };
  const [sort, setSort] = useState<'old' | 'new'>('old');
  const [sortedData, setSortedData] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      const sortedData = [...data].sort((a, b) => {
        if (sort === 'old') {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
      setSortedData(sortedData);
    }
  }, [sort, data]);

  return (
    <>
      <div
        style={{
          zIndex: 99,
          position: 'absolute',
          bottom: '0px',
          width: '335px',
          height: '56%',
          left: '50%',
          transform: 'translateX(-50%)',
          overflow: 'hidden',
        }}
      >
        <FolderCount count={count} />
        {data && data.length ? (
          <>
            <SortingBox onSort={(sort) => setSort(sort)} activeSort={sort} />
            <TapeListDetail data={sortedData} />
          </>
        ) : (
          <Content>
            <Empty>
              친구를 떠올리면 생각나는{'\n'}
              노래를 뮤직 카드에 담아 보내주세요
            </Empty>
            <BasicButton
              text='첫 번째로 음악카드 보내기'
              buttonStyle={{ width: '190px' }}
              onClick={() =>
                router.push({
                  pathname: '/search',
                  query: { userId },
                })
              }
            />
          </Content>
        )}
        <FolderSvg
          height='100%'
          width='100%'
          style={{
            overflow: 'hidden',
          }}
        />
      </div>
    </>
  );
};

const FolderIndex = styled.div`
  position: absolute;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: #fff;
`;

const Content = styled.div`
  white-space: pre-line;
  position: absolute;
  top: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 16px;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const Empty = styled.div`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: #fff;
  text-align: center;
`;

const SortBox = styled.div`
  display: flex;
  color: #fff;
  column-gap: 8px;
  position: absolute;

  > span {
    cursor: pointer;
    font-size: 16px;
  }
`;
