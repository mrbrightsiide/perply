import styled from '@emotion/styled';

export const ColoredBackground = ({ color = '#fff' }: { color?: string }) => {
  return (
    <BG
      css={{
        backgroundColor: color,
      }}
    />
  );
};

const BG = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
