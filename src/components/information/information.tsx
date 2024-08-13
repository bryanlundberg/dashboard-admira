import Card from "../card/card";

const Information = () => {
  return (
    <>
      <Card className="w-full bg-white lg:w-96 h-fit">
        <h2 className="font-bold">Demostración</h2>
        <p className="mb-5 font-mono">
          Objetivo: Procesar de manera gráfica datos provenientes de Google ads,
          Google Analytics, Meta Ads, u otro CRM.
        </p>
        <div className="flex flex-col gap-2 mt-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0088FE] rounded-full"></div>
            <p>Facebook Ads</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#00C49F] rounded-full"></div>
            <p>Google Ads</p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Information;
