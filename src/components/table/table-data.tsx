import { twMerge } from "tailwind-merge";

interface TableDataProps extends React.HTMLAttributes<HTMLTableCellElement> {
  className?: string;
  children: React.ReactNode;
  header?: boolean;
}

const TableData = ({
  header,
  children,
  className,
  ...rest
}: TableDataProps) => {
  const Component = header ? "th" : "td";
  return (
    <Component {...rest} className={twMerge("", className)}>
      {children}
    </Component>
  );
};

export default TableData;
