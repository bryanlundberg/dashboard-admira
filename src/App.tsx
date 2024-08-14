import AdsComparison from "./components/ads-comparison/ads-comparison";
import CampaignPerformance from "./components/campaign-performance/campaignPerformance";
import CustomPieChart from "./components/charts/pie-chart/custom-pie-chart";
import Container from "./components/container/container";
import KPIOverview from "./components/kpi-overview/kpi-overview";
import TableRow from "./components/table/table-row";
import Table from "./components/table/table-container";
import TableHeaderContent from "./components/table/table-header";
import MainLayout from "./layouts/layout";
import TableData from "./components/table/table-data";
import TableContent from "./components/table/table-content";
import useCRMProvider from "./hooks/useCRMProvider";
import { GoogleAds, MetaAds } from "./interfaces/api";
import useKPI from "./hooks/useKPI";
import Information from "./components/information/information";
import Card from "./components/card/card";
import CustomLineChart from "./components/charts/line-chart/custom-line-chart";
import { data } from "./data/data";
import AdsAddComparison from "./components/ads-comparison/ads-add-comparison";

function App() {
  const { data: metaAds } = useCRMProvider<MetaAds>({
    url: "/meta-ads.json",
  });
  const { data: googleAds } = useCRMProvider<GoogleAds>({
    url: "/google-ads.json",
  });

  const { KPI } = useKPI({ metaAds, googleAds });

  return (
    <>
      <MainLayout>
        <Container className="flex flex-col gap-3 px-3 py-3 lg:flex-row">
          {/* Left column */}
          <Information />

          <Container className="flex flex-col w-full gap-3">
            <Container className="flex flex-col gap-3 md:flex-row">
              <AdsComparison
                adsType="facebook-ads"
                conversions={(metaAds && metaAds.ads[0].conversions) || 0}
                cost={(metaAds && metaAds.ads[0].spendingAdvertising) || 0}
                impressions={(metaAds && metaAds.ads[0].impressions) || 0}
                clics={(metaAds && metaAds.ads[0].clics) || 0}
              />
              <AdsComparison
                adsType="google-ads"
                conversions={
                  (googleAds && googleAds.campaigns[0].conversions) || 0
                }
                cost={(googleAds && googleAds.campaigns[0].cost) || 0}
                impressions={
                  (googleAds && googleAds.campaigns[0].impressions) || 0
                }
                clics={(googleAds && googleAds.campaigns[0].clics) || 0}
              />

              <AdsAddComparison />
            </Container>

            <Card className="w-full bg-white h-52">
              <h2 className="mb-1 text-lg font-semibold text-center">
                Gráfico Lineal
              </h2>
              <CustomLineChart data={data} />
            </Card>

            <KPIOverview className="grid grid-cols-1 my-10 sm:grid-cols-2 md:grid-cols-4">
              <CustomPieChart title="Gasto" data={KPI.Cost} />
              <CustomPieChart title="Conversiones" data={KPI.Conversions} />
              <CustomPieChart title="Impresiones" data={KPI.Impressions} />
              <CustomPieChart title="Clicks" data={KPI.Clics} />
            </KPIOverview>

            <CampaignPerformance className="p-3 bg-white border rounded-md h-fit">
              <h3 className="mb-3 text-lg font-bold">
                Vista general de las campañas
              </h3>
              <Table className="w-full text-xs sm:text-sm">
                <TableHeaderContent>
                  <TableRow>
                    <TableData className="font-semibold text-start" header>
                      Campaña
                    </TableData>
                    <TableData
                      className="hidden font-semibold text-start sm:block"
                      header
                    >
                      Canal
                    </TableData>
                    <TableData className="font-semibold text-end" header>
                      Costo
                    </TableData>
                    <TableData className="font-semibold text-end">
                      Conversiones
                    </TableData>
                    <TableData className="font-semibold text-end" header>
                      Clicks
                    </TableData>
                    <TableData className="font-semibold text-end" header>
                      Impresiones
                    </TableData>
                  </TableRow>
                </TableHeaderContent>

                <TableContent>
                  {/* This section can be improved implementing a  standard output for merging the different coming APIS responses. */}
                  {metaAds &&
                    metaAds.ads.map((i) => {
                      return (
                        <TableRow key={i.name}>
                          <TableData className="text-start">{i.name}</TableData>
                          <TableData className="hidden text-start sm:block">
                            Facebook Ads
                          </TableData>
                          <TableData className="text-end">
                            {i.spendingAdvertising}
                          </TableData>
                          <TableData className="text-end">
                            {i.conversions}
                          </TableData>
                          <TableData className="text-end">{i.clics}</TableData>
                          <TableData className="text-end">
                            {i.impressions}
                          </TableData>
                        </TableRow>
                      );
                    })}

                  {googleAds &&
                    googleAds.campaigns.map((i) => {
                      return (
                        <TableRow key={i.name}>
                          <TableData className="text-start">{i.name}</TableData>
                          <TableData className="hidden text-start sm:block">
                            Google Ads
                          </TableData>
                          <TableData className="text-end">{i.cost}</TableData>
                          <TableData className="text-end">
                            {i.conversions}
                          </TableData>
                          <TableData className="text-end">{i.clics}</TableData>
                          <TableData className="text-end">
                            {i.impressions}
                          </TableData>
                        </TableRow>
                      );
                    })}
                </TableContent>
              </Table>
            </CampaignPerformance>
          </Container>
        </Container>
      </MainLayout>
    </>
  );
}

export default App;
