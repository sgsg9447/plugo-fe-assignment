import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import styled, { css } from "styled-components";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  Icon?: ReactNode;
  variant?:
    | "fulfilled"
    | "outlined"
    | "text"
    | "warning"
    | "circle"
    | "stockButton";
  style?: CSSProperties;
  color?: string;
  stockNumber?: number;
  stockText?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  onClick,
  children,
  variant = "fulfilled",
  disabled = false,
  Icon,
  style,
  color,
  stockNumber,
  stockText,
  type,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      style={style}
      color={color}
      type={type}
      {...rest}
    >
      {Icon && <IconWrapper>{Icon}</IconWrapper>}
      <TextWrapper>
        {children}
        {variant === "stockButton" && (
          <>
            <StockNumber>{stockNumber}</StockNumber>
            <StockText>{stockText}</StockText>
          </>
        )}
      </TextWrapper>
    </StyledButton>
  );
};

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  outline: none;
  transition: all 0.2s;
  width: 100%;

  ${(props) => props.variant && VARIANT[props.variant]}
  ${(props) => props.disabled && DISABLED}
`;

const IconWrapper = styled.div``;

const TextWrapper = styled.div`
  text-align: center;
  width: 100%;
`;

const StockNumber = styled.p`
  font-size: 1em;
  font-weight: bold;
`;

const StockText = styled.p`
  font-size: 1em;
  color: var(--color-text);
`;

const VARIANT = {
  fulfilled: css`
    color: var(--color-white);
    background-color: var(--color-main);
  `,
  outlined: css`
    color: var(--color-main);
    border: 1.5px solid var(--color-main);
  `,
  text: css`
    color: var(--color-main);
    background: transparent;
  `,
  warning: css`
    color: var(--color-white);
    background-color: var(--color-red);
  `,

  circle: (props: ButtonProps) => css`
    border-radius: 50%;
    background-color: ${props.color};
    width: 25px;
    height: 25px;
  `,
  stockButton: () => css`
    color: var(--color-text);
    border: 1.5px solid var(--color-text);
    &:hover {
      background-color: var(--color-light-gray);
    }
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: var(--color-light-gray);
  color: var(--color-text);
`;
