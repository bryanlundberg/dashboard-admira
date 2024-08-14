import { LineDataProps } from "../components/charts/line-chart/custom-line-chart";
import { GoogleAds, MetaAds } from "../interfaces/api";

export const normalizeLineGraphData = ({
  metaAds,
  googleAds,
  variant,
}: {
  metaAds: MetaAds | null;
  googleAds: GoogleAds | null;
  variant: "conversions" | "impressions" | "cost" | "clics";
}): LineDataProps[] => {
  const data: LineDataProps[] = [];

  // Initialize the base object with position names
  const baseData: { [key: string]: LineDataProps } = {};

  // Processing Google Ads data
  if (googleAds) {
    googleAds.campaigns.forEach((campaign, index) => {
      const key = index.toString();
      if (!baseData[key]) {
        baseData[key] = {
          name: String.fromCharCode(65 + index), // assign vowels
          "Google Ads": 0,
          "Facebook Ads": 0,
        };
      }

      baseData[key]["Google Ads"] += campaign[variant] || 0;
    });
  }

  // Processing Meta Ads data
  if (metaAds) {
    metaAds.ads.forEach((ad, index) => {
      const key = index.toString();
      if (!baseData[key]) {
        baseData[key] = {
          name: String.fromCharCode(65 + index), // assign vowels
          "Google Ads": 0,
          "Facebook Ads": 0,
        };
      }

      // very strange data manipulation because overall API responses are not normalized
      if (variant === "cost") {
        baseData[key]["Facebook Ads"] += ad["spendingAdvertising"] || 0;
      }

      if (
        variant === "clics" ||
        variant === "conversions" ||
        variant === "impressions"
      ) {
        baseData[key]["Facebook Ads"] += ad[variant] || 0;
      }
    });
  }

  // Convert the baseData object to an array of LineDataProps
  Object.keys(baseData).forEach((key) => {
    data.push(baseData[key]);
  });

  console.log(data);

  return data;
};
