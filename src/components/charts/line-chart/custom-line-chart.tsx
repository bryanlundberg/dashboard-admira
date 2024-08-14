import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface LineDataProps {
  name: string;
  "Google Ads": number;
  "Facebook Ads": number;
}

const CustomLineChart = ({ data }: { data: LineDataProps[] }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="Facebook Ads"
            stroke="#0088FE"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Google Ads" stroke="#00C49F" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default CustomLineChart;
