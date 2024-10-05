import styled from '@emotion/styled';

export const TextInputLabel = ({
  label,
  isOptional = false,
}: {
  label: string;
  isOptional?: boolean;
}) => {
  return (
    <Label>
      {label}
      {!isOptional && <span>*</span>}
    </Label>
  );
};

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: #111;

  span {
    font-size: 15px;
    color: ${({ theme }) => theme.color.point_red};
  }
`;
