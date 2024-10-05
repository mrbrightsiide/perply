import styled from '@emotion/styled';
import { useRef } from 'react';

export const SearchMusicInput = ({
  onChange,
  fetchMusicSearch,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fetchMusicSearch: () => Promise<void>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <SearchInput
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      <input
        type='text'
        onChange={onChange}
        placeholder='추천하고 싶은 노래를 검색하세요'
        ref={inputRef}
        onKeyUp={async (e) => {
          if (e.key === 'Enter') {
            await fetchMusicSearch();
          }
        }}
      />
      <button
        onClick={async (e) => {
          e.preventDefault();
          await fetchMusicSearch();
        }}
      >
        {/* <img src='' /> */}
      </button>
    </SearchInput>
  );
};

const SearchInput = styled.div`
  border: 1px solid #e5e5ec;
  border-radius: 8px;
  padding: 14px 14px 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 100%;
    color: #111;
  }
`;
