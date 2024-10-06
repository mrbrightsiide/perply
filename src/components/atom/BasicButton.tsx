import { theme } from '@/styles/theme.d';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const BasicButton = ({
  text,
  onClick,
  buttonStyle,
  icon,
  style,
}: {
  text: string;
  onClick: () => void;
  buttonStyle?: {
    background?: string;
    color?: string;
    width?: string;
  };
  icon?: JSX.Element;
  style?: React.CSSProperties;
}) => {
  return (
    <Wrapper
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      css={css`
        background: ${buttonStyle?.background || theme.primary[600]};
        color: ${buttonStyle?.color || '#353535'};
        width: ${buttonStyle?.width || '100%'};
      `}
      style={style}
    >
      {icon && icon}
      {text}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  border-radius: 250px;
  padding: 15px 0 16px 0;
  width: 100%;
  border: none;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer !important;
`;
