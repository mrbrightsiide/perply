/* eslint-disable @typescript-eslint/no-unused-expressions */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

export const BackBtnHeader = ({
  title,
  subContent,
  onGoBack,
  background,
}: {
  title?: string;
  subContent?: React.ReactNode;
  onGoBack?: () => void;
  background?: string;
}) => {
  const router = useRouter();

  return (
    <Wrapper background={background}>
      <BackAnchor
        css={css`
          border: 1px solid black;
        `}
        onClick={(e) => {
          e.preventDefault();
          onGoBack ? onGoBack() : router.back();
        }}
        href='/'
      >
        {/* <img src='' alt='' /> */}
      </BackAnchor>
      {title && <Title>{title}</Title>}
      {subContent}
    </Wrapper>
  );
};

const BackAnchor = styled.a`
  display: block;
  position: absolute;
  left: 30px;
  background-color: red;
  color: white;
  width: 28px;
  height: 28px;
`;

const Title = styled.p`
  font-size: 20px;
`;

const Wrapper = styled.div<{
  background?: string;
}>`
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 14px 0;
  height: calc(56px - 14px * 2);
  position: fixed;
  background-color: ${({ background }) => (background ? background : 'white')};
  top: 0;
  height: 56px;
  z-index: 100;
  color: #111;
`;
