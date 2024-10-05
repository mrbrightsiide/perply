import styled from '@emotion/styled';
import { useRef } from 'react';
import { TextInputLabel } from './TextInputLabel';

export const TextInput = ({
  placeholder,
  onChangeInput,
  value,
}: {
  placeholder: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => {
  return (
    <>
      <Wrapper>
        <Input
          type='text'
          placeholder={placeholder}
          onChange={onChangeInput}
          value={value}
        />
      </Wrapper>
    </>
  );
};

export const TextInputWithLabel = ({
  placeholder,
  label,
  onChangeInput,
  isOptional = false,
  value,
  inputStyle,
}: {
  placeholder: string;
  label: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isOptional?: boolean;
  value: string;
  inputStyle?: React.CSSProperties;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <TextInputLabel label={label} isOptional={isOptional} />
      <Wrapper
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        <Input
          ref={inputRef}
          type='text'
          placeholder={placeholder}
          onChange={onChangeInput}
          value={value}
          style={inputStyle}
        />
      </Wrapper>
    </div>
  );
};

export const TextAreaWithLabel = ({
  placeholder,
  label,
  onChangeInput,
  isOptional = false,
  value,
  inputStyle,
}: {
  placeholder: string;
  label: string;
  onChangeInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isOptional?: boolean;
  value: string;
  inputStyle?: React.CSSProperties;
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div>
      <TextInputLabel label={label} isOptional={isOptional} />
      <Wrapper
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        <TextArea
          ref={inputRef}
          placeholder={placeholder}
          onChange={onChangeInput}
          value={value}
          style={inputStyle}
        />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  border: 1px solid #e5e5ec;
  border-radius: 8px;
  padding: 14px 16px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.line.black};
`;

const TextArea = styled.textarea`
  border: none;
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.line.black};
  background-color: #fff;
  &:focus {
    outline: none;
  }
`;
