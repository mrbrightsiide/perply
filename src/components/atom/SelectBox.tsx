import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { IPlayList } from '@/types';

export const SelectBox = ({
  selectedId,
  setSelected,
  list,
}: {
  selectedId: IPlayList['id'];
  setSelected: (item: IPlayList) => void;
  list: IPlayList[];
}) => {
  const [folded, setFolded] = useState(true);
  return (
    <>
      <Wrapper
        onClick={() => setFolded(!folded)}
        css={css`
          border: 1px solid #e5e5ec;
          border-radius: 8px;
        `}
      >
        <span>
          {list.find((item) => item.id === selectedId)?.playlist_title_other ||
            '카테고리 선택'}
        </span>
        <span className='ico'>{folded ? '▼' : '▲'}</span>
      </Wrapper>
      {!folded && (
        <ListWrapper>
          {list.map((item) => (
            <Wrapper
              key={item.id}
              onClick={() => {
                setSelected(item);
                setFolded(true);
              }}
            >
              {item.id}
            </Wrapper>
          ))}
        </ListWrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  padding: 14px 16px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.line.black};
  position: relative;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ListWrapper = styled.div`
  position: absolute;
  width: calc(100% - 40px * 2);
  border: 1px solid #e5e5ec;
  border-radius: 8px;
  > div {
    border-bottom: 1px solid #e5e5ec;
  }
`;
