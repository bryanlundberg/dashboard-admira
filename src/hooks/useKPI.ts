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
    Clics: [...DEFAULT_PIE_DATA],
    Impressions: [...DEFAULT_PIE_DATA],
    Conversions: [...DEFAULT_PIE_DATA],
    Cost: [...DEFAULT_PIE_DATA],
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
