import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FloatButton = ({
  title,
  disabled,
  bottomOffset = 30,
  onClick,
}: {
  title: string;
  disabled?: boolean;
  bottomOffset?: number;
  onClick: () => void;
}) => {
  return (
    <Button
      disabled={disabled}
      bottomOffset={bottomOffset}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {title}
    </Button>
  );
};

const Button = styled.button<{
  bottomOffset: number;
}>`
  position: fixed;
  bottom: ${({ bottomOffset }) => bottomOffset}px;
  width: inherit;
  max-width: 335px;
  align-self: center;
  justify-self: center;
  height: 52px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.primary[600]};
  color: #222222;
  font-size: 16px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
  border: none;
  cursor: pointer;

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: #e9ebec;
      cursor: not-allowed;
      color: ${theme.font.gray_03};
    `}
`;
