import { theme } from '@/styles/theme.d';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FloatButton = ({
  title,
  disabled,
  bottomOffset = 30,
  onClick,
  style,
}: {
  title: string;
  disabled?: boolean;
  bottomOffset?: number;
  onClick: () => void;
  style?: {
    bg?: string;
    color?: string;
    maxWidth?: string;
    left?: string;
    right?: string;
  };
}) => {
  return (
    <Button
      disabled={disabled}
      bottomOffset={bottomOffset}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      css={css`
        background-color: ${style?.bg || theme.primary[600]};
        color: ${style?.color || '#222222'};
        max-width: ${style?.maxWidth || '335px'};
        left: ${style?.left || 'auto'};
        right: ${style?.right || 'auto'};
      `}
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
  font-size: 16px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
  border: none;
  cursor: pointer;
  z-index: 99;

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: #e9ebec !important;
      cursor: not-allowed !important;
      color: ${theme.font.gray_03} !important;
    `}
`;
