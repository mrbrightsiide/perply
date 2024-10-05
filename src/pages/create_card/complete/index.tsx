import styled from '@emotion/styled';
import { BasicButton } from '@/components/atom/BasicButton';
import { useRouter } from 'next/router';
import { ColoredBackground } from '@/components/atom/ColoredBackground';
import { css } from '@emotion/react';

const Index = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <ColoredBackground />
      <p
        css={css`
          font-size: 16px;
        `}
      >
        음악 카드가 성공적으로 전송 되었어요
      </p>
      <span>
        나는 어떤 음악인지 궁금하다면?{'\n'}지금 나의 플레이리스트를
        만들어보세요.
      </span>
      <BtnWrap>
        <BasicButton
          text='닫기'
          onClick={() => router.push('/my_home')}
          buttonStyle={{
            background: 'rgb(191, 191, 191, 0.3)',
          }}
        />
        <BasicButton text='나도 만들기' onClick={() => router.push('/')} />
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

  p {
    text-align: center;
    font-size: 16px;
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
`;

export default Index;
