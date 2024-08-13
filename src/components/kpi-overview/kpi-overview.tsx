import { twMerge } from "tailwind-merge";

interface KPIOverviewProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const KPIOverview = ({ className, ...rest }: KPIOverviewProps) => {
  return (
    <>
      <div
        {...rest}
        className={twMerge("grid w-full grid-cols-2 gap-3", className)}
      ></div>
    </>
  );
};

export default KPIOverview;
