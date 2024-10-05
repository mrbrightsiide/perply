import styled from '@emotion/styled';

export const CheckBox = ({
  checked,
  onChange,
  style = {
    width: 24,
    height: 24,
  },
}: {
  checked: boolean;
  onChange: () => void;
  style?: {
    width?: number;
    height?: number;
  };
}) => {
  return (
    <Box
      type='checkbox'
      onChange={onChange}
      width={style.width!}
      height={style.height!}
      checked={checked}
    />
  );
};

const Box = styled.input<{
  width: number;
  height: number;
  checked: boolean;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ checked }) => (checked ? '#FFD600' : 'skyblue')};
`;
