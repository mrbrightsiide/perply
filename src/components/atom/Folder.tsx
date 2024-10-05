import styled from '@emotion/styled';
import FolderSvg from '@/assets/folder.svg';
import { BasicButton } from './BasicButton';
import { useRouter } from 'next/router';
import { TapeListDetail } from '../home/TapeListDetail';
import { ITape } from '@/types';
// import { usePlayListStore } from '@/stores';
// import { useEffect } from 'react';

export const Folder = ({
  count = 0,
  data,
}: {
  count: number;
  data?: ITape[];
}) => {
  const router = useRouter();
  // const { sortType, setSort } = usePlayListStore((state) => ({
  //   sortType: state.sortType,
  //   setSort: state.setSort,
  // }));

  // useEffect(() => {
  //   console.log(sortType);
  // }, [sortType]);

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
        <FolderIndex>{count}개의 곡</FolderIndex>
        {data ? (
          <>
            <SortBox>
              {/* <span onClick={() => setSort('old')}>오래된순</span>
              <span onClick={() => setSort('new')}>최신순</span> */}
            </SortBox>
            <TapeListDetail data={data} />
          </>
        ) : (
          <Content>
            <Empty>
              친구를 떠올리면 생각나는{'\n'}
              노래를 뮤직 카드에 담아 보내주세요
              <BasicButton
                text='첫 번째로 노래 추천하기'
                buttonStyle={{ width: '190px' }}
                onClick={() => router.push('/search')}
              />
            </Empty>
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
  top: 16px;
  left: 20px;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: #fff;
`;

const Content = styled.div`
  white-space: pre-line;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
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
  position: absolute;
  top: 56px;
  right: 20px;

  > span {
    cursor: pointer;
  }
`;
