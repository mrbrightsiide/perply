import styled from '@emotion/styled';
import { BasicButton } from '@/components/atom/BasicButton';
import { useRouter } from 'next/router';
import { ColoredBackground } from '@/components/atom/ColoredBackground';
import { css } from '@emotion/react';
import { signIn, useSession } from 'next-auth/react';

const Index = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { userId } = router.query as { userId: string };

  return (
    <Wrapper>
      <ColoredBackground />
      <p
        css={css`
          font-size: 20px;
        `}
      >
        음악 카드가 성공적으로{'\n'}
        전송 되었어요!
      </p>
      <img src='/images/create/complete.png' alt='' width='100%' />
      <span>
        나는 어떤 음악인지 궁금하다면?{'\n'}지금 나의 플레이리스트를
        만들어보세요.
      </span>
      <BtnWrap>
        <BasicButton
          text='닫기'
          onClick={() =>
            router.push({
              pathname: '/home',
              query: {
                userId,
              },
            })
          }
          buttonStyle={{
            background: 'rgb(191, 191, 191, 0.3)',
          }}
        />
        <BasicButton
          text='나도 만들기'
          onClick={() =>
            signIn('kakao', {
              callbackUrl: `/home/?userId=b61fb2`,
            })
          }
        />
      </BtnWrap>
    </Wrapper>
  );
};

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 28px;
  margin-top: 40px;
`;

const Wrapper = styled.div`
  padding: 300px 20px 0 20px;
  text-align: center;
  color: ${({ theme }) => theme.color.black};
  white-space: pre-line;

  p {
    text-align: center;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    margin-bottom: 15px;
  }

  span {
    display: block;
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    white-space: pre-line;
    line-height: 24px;
  }

  img {
    display: block;
    margin-bottom: 20px;
  }
`;

export default Index;
