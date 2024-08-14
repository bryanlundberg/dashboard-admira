import { useEffect, useState } from "react";
import { GoogleAds, MetaAds } from "../interfaces/api";
import {
  DEFAULT_PIE_DATA,
  getTotalCampaignClicks,
  getTotalCampaignConversions,
  getTotalCampaignCosts,
  getTotalCampaignImpressions,
} from "../lib/KPI";

const useKPI = ({
  metaAds,
  googleAds,
}: {
  metaAds: MetaAds | null;
  googleAds: GoogleAds | null;
}) => {
  const [KPI, setKPI] = useState({
    Clics: DEFAULT_PIE_DATA.map((data) => ({
      ...data,
    })),
    Impressions: DEFAULT_PIE_DATA.map((data) => ({
      ...data,
    })),
    Conversions: DEFAULT_PIE_DATA.map((data) => ({
      ...data,
    })),
    Cost: DEFAULT_PIE_DATA.map((data) => ({
      ...data,
    })),
  });

  useEffect(() => {
    setKPI({
      Cost: getTotalCampaignCosts({ metaAds, googleAds }),
      Impressions: getTotalCampaignImpressions({ metaAds, googleAds }),
      Conversions: getTotalCampaignConversions({ metaAds, googleAds }),
      Clics: getTotalCampaignClicks({ metaAds, googleAds }),
    });
  }, [metaAds, googleAds]);

  return { KPI };
};

export default useKPI;
