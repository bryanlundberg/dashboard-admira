import { twMerge } from "tailwind-merge";

interface TableContentProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  children: React.ReactNode;
}

const TableContent = ({ children, className, ...rest }: TableContentProps) => {
  return (
    <>
      <tbody {...rest} className={twMerge("", className)}>
        {children}
      </tbody>
    </>
  );
};

export default TableContent;
