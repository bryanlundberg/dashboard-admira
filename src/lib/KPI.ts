import { PieDataProps } from "../components/charts/pie-chart/custom-pie-chart";
import { GoogleAds, MetaAds } from "../interfaces/api";

export const DEFAULT_PIE_DATA: PieDataProps[] = [
  {
    name: "Google Ads",
    value: 0,
  },
  {
    name: "Facebook Ads",
    value: 0,
  },
];

export const getTotalCampaignCosts = ({
  metaAds,
  googleAds,
}: {
  metaAds: MetaAds | null;
  googleAds: GoogleAds | null;
}): PieDataProps[] => {
  const totalCosts: PieDataProps[] = [...DEFAULT_PIE_DATA];

  if (googleAds) {
    googleAds.campaigns.forEach((element) => {
      totalCosts[0].value += element.cost || 0;
    });
  }

  if (metaAds) {
    metaAds.ads.forEach((element) => {
      totalCosts[1].value += element.spendingAdvertising || 0;
    });
  }

  return totalCosts;
};

export const getTotalCampaignImpressions = ({
  metaAds,
  googleAds,
}: {
  metaAds: MetaAds | null;
  googleAds: GoogleAds | null;
}) => {
  const totalImpressions: PieDataProps[] = [...DEFAULT_PIE_DATA];

  if (googleAds) {
    googleAds.campaigns.forEach((element) => {
      totalImpressions[0].value += element.impressions || 0;
    });
  }

  if (metaAds) {
    metaAds.ads.forEach((element) => {
      totalImpressions[1].value += element.impressions || 0;
    });
  }

  return totalImpressions;
};

export const getTotalCampaignConversions = ({
  metaAds,
  googleAds,
}: {
  metaAds: MetaAds | null;
  googleAds: GoogleAds | null;
}) => {
  const totalConversions: PieDataProps[] = [...DEFAULT_PIE_DATA];

  if (googleAds) {
    googleAds.campaigns.forEach((element) => {
      totalConversions[0].value += element.conversions || 0;
    });
  }

  if (metaAds) {
    metaAds.ads.forEach((element) => {
      totalConversions[1].value += element.conversions || 0;
    });
  }

  return totalConversions;
};

export const getTotalCampaignClicks = ({
  metaAds,
  googleAds,
}: {
  metaAds: MetaAds | null;
  googleAds: GoogleAds | null;
}) => {
  const totalClicks: PieDataProps[] = [...DEFAULT_PIE_DATA];

  if (googleAds) {
    googleAds.campaigns.forEach((element) => {
      totalClicks[0].value += element.clics || 0;
    });
  }

  if (metaAds) {
    metaAds.ads.forEach((element) => {
      totalClicks[1].value += element.clics || 0;
    });
  }

  return totalClicks;
};
