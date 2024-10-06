/* eslint-disable @typescript-eslint/no-unused-expressions */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

export const BackBtnHeader = ({
  title,
  subContent,
  onGoBack,
  background,
  color = '#111',
  whiteArrow,
}: {
  title?: string;
  subContent?: React.ReactNode;
  onGoBack?: () => void;
  background?: string;
  color?: string;
  whiteArrow?: boolean;
}) => {
  const router = useRouter();

  return (
    <Wrapper
      background={background}
      css={css`
        color: ${color};
      `}
    >
      <BackAnchor
        onClick={(e) => {
          e.preventDefault();
          onGoBack ? onGoBack() : router.back();
        }}
        href='/'
      >
        <img src={`/images/back${whiteArrow ? '_wh' : ''}.png`} alt='' />
      </BackAnchor>
      {title && <Title>{title}</Title>}
      {subContent}
    </Wrapper>
  );
};

const BackAnchor = styled.a`
  display: block;
  position: absolute;
  left: 20px;
  color: white;
  width: 28px;
  height: 28px;
  object-fit: contain;

  img {
    width: 100%;
    height: 100%;
    margin-left: -20px;
  }
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
`;
