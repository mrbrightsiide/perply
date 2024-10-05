import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const SelectBox = <T extends { text: string }>({
  selected,
  setSelected,
  list,
}: {
  selected: T;
  setSelected: (item: T) => void;
  list: T[];
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
        <span>{selected.text}</span>
        <span className='ico'>{folded ? '▼' : '▲'}</span>
      </Wrapper>
      {!folded && (
        <ListWrapper>
          {list.map((item) => (
            <Wrapper
              key={item.text}
              onClick={() => {
                setSelected(item);
                setFolded(true);
              }}
            >
              {item.text}
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
