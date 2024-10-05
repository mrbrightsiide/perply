import styled from '@emotion/styled';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MainWrapper>{children}</MainWrapper>;
}

const MainWrapper = styled.main`
  min-height: 100vh;
  max-width: 375px;
  margin: 0 auto;
  width: 375px;
  display: flex;
  flex-direction: column;
`;
