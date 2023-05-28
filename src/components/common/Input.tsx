import { CSSProperties, InputHTMLAttributes } from "react";
import styled from "styled-components";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type?: "text" | "number" | "file";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: CSSProperties;
  name?: string;
};

export const Input = ({
  type = "text",
  placeholder,
  onChange,
  name,
  ...rest
}: InputProps) => (
  <StyledInput
    name={name}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    {...rest}
  />
);

const StyledInput = styled.input`
  padding: 10px;
  border: none;
  outline: none;
  width: 100%;
`;
