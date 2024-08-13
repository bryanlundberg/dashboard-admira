import { twMerge } from "tailwind-merge";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <div
      {...rest}
      className={twMerge(
        "w-full border rounded-md h-fit p-3 overflow-hidden bg-neutral-200/20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
