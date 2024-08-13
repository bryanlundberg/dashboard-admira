import { twMerge } from "tailwind-merge";

interface MainLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const MainLayout = ({ children, className, ...rest }: MainLayoutProps) => {
  return (
    <div
      {...rest}
      className={twMerge(
        "min-h-screen bg-neutral-100 w-full h-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MainLayout;
