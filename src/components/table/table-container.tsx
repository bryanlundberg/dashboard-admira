import { twMerge } from "tailwind-merge";

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  className?: string;
  children: React.ReactNode;
}

const Table = ({ children, className, ...rest }: TableProps) => {
  return (
    <>
      <table {...rest} className={twMerge("", className)}>
        {children}
      </table>
    </>
  );
};

export default Table;
