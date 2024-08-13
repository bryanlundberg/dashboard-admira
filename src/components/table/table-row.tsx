import { twMerge } from "tailwind-merge";

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  className?: string;
  children: React.ReactNode;
}

const TableRow = ({ children, className, ...rest }: TableRowProps) => {
  return (
    <>
      <tr {...rest} className={twMerge("", className)}>
        {children}
      </tr>
    </>
  );
};

export default TableRow;
