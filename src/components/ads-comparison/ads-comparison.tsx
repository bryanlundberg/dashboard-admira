import { twMerge } from "tailwind-merge";
import Card from "../card/card";

interface AdsComparisonProps extends React.HTMLAttributes<HTMLDivElement> {
  adsType: "google-ads" | "facebook-ads";
  className?: string;
  cost: number;
  conversions: number;
  impressions: number;
  clics: number;
}

const AdsComparison = ({
  adsType,
  className,
  cost,
  conversions,
  impressions,
  clics,
  ...rest
}: AdsComparisonProps) => {
  return (
    <>
      <div {...rest} className={twMerge("flex gap-3 w-full", className)}>
        <Card className="w-full bg-white">
          <div className="flex items-center gap-2">
            <img
              src={
                adsType === "facebook-ads" ? "/facebook.jpg" : "/google-ads.png"
              }
              className="w-8 h-8 overflow-hidden border rounded-full"
            />
            <div className="text-lg font-semibold ">
              {adsType === "facebook-ads" ? "Facebook Ads" : "Google Ads"}
            </div>
          </div>

          <div className="grid grid-cols-2 pt-3">
            <div className="text-center">
              <div className="text-sm">Tasa de clicks (CTR)</div>
              <div className="text-2xl font-semibold">
                {(clics / impressions).toFixed(2)}
              </div>
              <div className="text-xs text-green-500">2.3%</div>
            </div>

            <div className="text-center">
              <div className="text-sm">Costo por click (CPC)</div>
              <div className="text-2xl font-semibold">
                ${(cost / clics).toFixed(2)}
              </div>
              <div className="text-xs text-green-500">2.3%</div>
            </div>

            <div className="text-center">
              <div className="text-sm">Costo por Impresiones (CPM)</div>
              <div className="text-2xl font-semibold">
                $ {(cost / impressions) * 1000}
              </div>
              <div className="text-xs text-green-500">2.3%</div>
            </div>

            <div className="text-center">
              <div className="text-sm">Costo por lead (CPL)</div>
              <div className="text-2xl font-semibold">
                ${(cost / conversions).toFixed(2)}
              </div>
              <div className="text-xs text-green-500">2.3%</div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default AdsComparison;
