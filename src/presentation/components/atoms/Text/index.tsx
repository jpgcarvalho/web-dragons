import "./styles.css";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: string | string[] | React.ReactNode;
  className?: string;
  size?: "sm" | "lg" | "xl";
}

export default function Text({ children, className, size, ...props }: Props) {
  const defaultClass = () => {
    switch (size) {
      case "sm":
        return "text-small";
      case "lg":
        return "text-large";
      case "xl":
        return "text-extra-large";
      default:
        return undefined;
    }
  };

  return (
    <p className={`${defaultClass()} ${className}`} {...props}>
      {children}
    </p>
  );
}
