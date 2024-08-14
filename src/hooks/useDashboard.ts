import { ChangeEvent, useEffect, useState } from "react";
import { GoogleAds, MetaAds } from "../interfaces/api";
import {
  DEFAULT_PIE_DATA,
  getTotalCampaignClicks,
  getTotalCampaignConversions,
  getTotalCampaignCosts,
  getTotalCampaignImpressions,
} from "../lib/KPI";
import { LineDataProps } from "../components/charts/line-chart/custom-line-chart";
import { normalizeLineGraphData } from "../lib/normalize";

const useDashboard = ({
  metaAds,
  googleAds,
}: {
  metaAds: MetaAds | null;
  googleAds: GoogleAds | null;
}) => {
  const [linealOption, setLinealOption] = useState("impressions");
  const [linealGraphData, setLinealGraphData] = useState<LineDataProps[]>([]);

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

  const handleChangeLinealOption = (
    newOption: ChangeEvent<HTMLSelectElement>
  ) => {
    setLinealOption(newOption.target.value);
  };

  useEffect(() => {
    setKPI({
      Cost: getTotalCampaignCosts({ metaAds, googleAds }),
      Impressions: getTotalCampaignImpressions({ metaAds, googleAds }),
      Conversions: getTotalCampaignConversions({ metaAds, googleAds }),
      Clics: getTotalCampaignClicks({ metaAds, googleAds }),
    });
  }, [metaAds, googleAds]);

  useEffect(() => {
    const data = normalizeLineGraphData({
      metaAds,
      googleAds,
      // @ts-expect-error there is no time to implement a enum validation from select using e.g zod.
      variant: linealOption,
    });
    setLinealGraphData([...data]);
  }, [metaAds, googleAds, linealOption]);

  return { KPI, linealOption, linealGraphData, handleChangeLinealOption };
};

export default useDashboard;
