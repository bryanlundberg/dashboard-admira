import { twMerge } from "tailwind-merge";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className, ...rest }: ContainerProps) => {
  return (
    <div {...rest} className={twMerge("", className)}>
      {children}
    </div>
  );
};

export default Container;
