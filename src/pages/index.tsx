'use client';
import { BasicButton } from '@/components/atom/BasicButton';
import { ColoredBackground } from '@/components/atom/ColoredBackground';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <Wrapper>
      <ColoredBackground color='#141414' />
      <Bg src='/images/intro_bg.png' />
      <p
        css={css`
          margin-top: 40px;
        `}
      >
        여러분은 서로에게{'\n'}
        <span>어떤 음악</span>
        인가요?
      </p>
      <p
        css={css`
          margin-top: 16px;
        `}
      >
        함께 만드는{'\n'}나의 플레이리스트,{'\n'}퍼플리
      </p>
      <img
        src='/images/logo/logo.png'
        alt='list image'
        width={178}
        css={css`
          margin-left: -16px;
          margin-top: 20px;
          margin-bottom: 200px;
        `}
      />
      <BasicButton
        onClick={() =>
          signIn('kakao', {
            callbackUrl: `/home/?userId=b61fb2`,
          })
        }
        text='카카오로 시작하기'
        icon={
          <img
            src='/images/kakao.png'
            alt=''
            css={css`
              width: 20px;
              height: 20px;
              background-color: pink;
              display: inline-block;
              margin-right: 8px;
            `}
          />
        }
        buttonStyle={{ background: '#fff', color: '#505050' }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 0px;
  padding: 47px 33px 0 33px;

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.font.gray_04};
    white-space: pre-line;
    line-height: 24px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    > span {
      color: ${({ theme }) => theme.primary[600]};
    }
  }
`;

const Bg = styled.img`
  width: auto;
  height: calc(100vh - 47px);
  position: absolute;
  z-index: -1;
  overflow: hidden;
`;
