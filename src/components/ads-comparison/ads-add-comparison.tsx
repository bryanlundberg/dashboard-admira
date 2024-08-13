import { twMerge } from "tailwind-merge";

interface AdsComparisonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const AdsAddComparison = ({ className, ...rest }: AdsComparisonProps) => {
  return (
    <>
      <div
        {...rest}
        className={twMerge(
          "w-full grow border border-dashed border-neutral-400 rounded-md bg-transparent flex items-center justify-center hover:bg-neutral-50 hover:cursor-pointer select-none text-center transition duration-200 font-mono h-20 sm:h-52 sm:w-96 p-3",
          className
        )}
      >
        Vincular otro CRM +
      </div>
    </>
  );
};

export default AdsAddComparison;
