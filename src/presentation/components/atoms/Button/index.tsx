import React from "react";
import "./styles.css";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: string;
  className?: string;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button className={`${className} button`} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

export { Button };
