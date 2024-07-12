import React from "react";
import { classNames } from "../../../helpers/helpers";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  children: string | React.ReactNode,
  variant?: string,
  bold?: boolean,
  italic?: boolean,
  fontFamily?: string,
}

export function Typography({
  children,
  variant = 'p',
  bold = false,
  italic = false,
  ...props
}: InputProps) {
  let size = '';
  if (variant === 'p') {
    size = '';
  } else if (variant === 'h4') {
    size = 'text-xl';
  } else if (variant === 'h3') {
    size = 'text-2xl';
  } else if (variant === 'h2') {
    size = 'text-3xl';
  } else if (variant === 'h1') {
    size = 'text-5xl';
  }

  const hasPb = props.className && /pb-/.test(props.className)

  return(
    <p className={classNames(
      size,
      bold ? 'font-bold' : 'font-semibold',
      italic ? 'italic' : 'not-italic',
      props.className,
      !hasPb && 'pb-10',
    )}
    {...props}
    >
      {children}
    </p>
  )
}