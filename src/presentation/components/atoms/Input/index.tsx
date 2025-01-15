import React from "react";
import "./styles.css";

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  className?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return <input className={`${className} input`} ref={ref} {...props} />;
  }
);
export { Input };
