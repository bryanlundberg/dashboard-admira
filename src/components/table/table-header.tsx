import { twMerge } from "tailwind-merge";

interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  children: React.ReactNode;
}

const TableHeaderContent = ({
  children,
  className,
  ...rest
}: TableHeaderProps) => {
  return (
    <>
      <thead {...rest} className={twMerge("", className)}>
        {children}
      </thead>
    </>
  );
};

export default TableHeaderContent;
