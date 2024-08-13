import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface CustomPieChartProps {
  data: PieDataProps[];
  title: string;
}

export interface PieDataProps {
  name: string;
  value: number;
}

const COLORS: string[] = ["#00C49F", "#0088FE"];

const CustomPieChart = ({ title, data }: CustomPieChartProps) => {
  return (
    <>
      <div className="w-full h-full max-h-52">
        <h2 className="text-lg font-semibold text-center">{title}</h2>
        <ResponsiveContainer width="100%" height={154}>
          <PieChart>
            <Pie
              data={data}
              dataKey={"value"}
              innerRadius="30"
              outerRadius="100%"
              fill="#ff0000"
              paddingAngle={0}
            >
              {/* @ts-expect-error Here it's only needed the index value to iterate the COLORS variable. */}
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default CustomPieChart;
