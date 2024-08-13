import { twMerge } from "tailwind-merge";

interface CampaignPerformanceProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const CampaignPerformance = ({
  children,
  className,
  ...rest
}: CampaignPerformanceProps) => {
  return (
    <div {...rest} className={twMerge("", className)}>
      {children}
    </div>
  );
};

export default CampaignPerformance;
