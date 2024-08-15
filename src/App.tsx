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
import Information from "./components/information/information";
import Card from "./components/card/card";
import CustomLineChart from "./components/charts/line-chart/custom-line-chart";
import AdsAddComparison from "./components/ads-comparison/ads-add-comparison";
import useDashboard from "./hooks/useDashboard";
import { genNewGoogleData, genNewMetaData } from "./lib/genNewData";

function App() {
  const { data: metaAds, setData: handleRandomizeMetaAds } =
    useCRMProvider<MetaAds>({
      url: "/meta-ads.json",
    });
  const { data: googleAds, setData: handleRandomizeGoogleAds } =
    useCRMProvider<GoogleAds>({
      url: "/google-ads.json",
    });

  const { KPI, linealOption, linealGraphData, handleChangeLinealOption } =
    useDashboard({
      metaAds,
      googleAds,
    });

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

            <Card className="w-full bg-white h-96">
              {/* header */}
              <div className="flex justify-between px-3 mb-3">
                <h2 className="mb-1 text-lg font-semibold text-center">
                  {linealOption}
                </h2>
                <select
                  className="border rounded-md ps-2"
                  value={linealOption}
                  onChange={(e) => handleChangeLinealOption(e)}
                >
                  <option value="clics">Clics</option>
                  <option value="cost">Gasto</option>
                  <option value="impressions">Impresiones</option>
                  <option value="conversions">Conversiones</option>
                </select>
              </div>
              {/* content */}
              <CustomLineChart data={linealGraphData} />
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
                  <TableRow className="bg-neutral-200">
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
                        <TableRow key={i.name} className="even:bg-neutral-50">
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
                        <TableRow key={i.name} className="even:bg-neutral-50">
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

        <button
          onClick={() => {
            handleRandomizeMetaAds(genNewMetaData());
            handleRandomizeGoogleAds(genNewGoogleData());
          }}
          className="fixed w-20 text-xs text-white border rounded-lg border-neutral-500 bg-neutral-700 bottom-3 left-3 h-14 animate-pulse"
        >
          Generar nuevos datos
        </button>
      </MainLayout>
    </>
  );
}

export default App;
