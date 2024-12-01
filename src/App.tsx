import "./index.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function Ranking() {
  const ranking = [
    {
      name: "model_0",
      sharpe_1d: 0,
      sharpe_7d: 0,
      sharpe_30d: 0,
      sharpe_90d: 0,
      sharpe_365d: 0,
    },
    {
      name: "model_1",
      sharpe_1d: 1,
      sharpe_7d: 2,
      sharpe_30d: 3,
      sharpe_90d: 4,
      sharpe_365d: 5,
    },
    {
      name: "model_2",
      sharpe_1d: 2,
      sharpe_7d: 4,
      sharpe_30d: 6,
      sharpe_90d: 8,
      sharpe_365d: 10,
    },
    {
      name: "model_3",
      sharpe_1d: 3,
      sharpe_7d: 6,
      sharpe_30d: 9,
      sharpe_90d: 12,
      sharpe_365d: 15,
    },
    {
      name: "model_4",
      sharpe_1d: 4,
      sharpe_7d: 8,
      sharpe_30d: 12,
      sharpe_90d: 16,
      sharpe_365d: 20,
    },
    {
      name: "model_5",
      sharpe_1d: 5,
      sharpe_7d: 10,
      sharpe_30d: 15,
      sharpe_90d: 20,
      sharpe_365d: 25,
    },
    {
      name: "model_6",
      sharpe_1d: 6,
      sharpe_7d: 12,
      sharpe_30d: 18,
      sharpe_90d: 24,
      sharpe_365d: 30,
    },
    {
      name: "model_7",
      sharpe_1d: 7,
      sharpe_7d: 14,
      sharpe_30d: 21,
      sharpe_90d: 28,
      sharpe_365d: 35,
    },
    {
      name: "model_8",
      sharpe_1d: 8,
      sharpe_7d: 16,
      sharpe_30d: 24,
      sharpe_90d: 32,
      sharpe_365d: 40,
    },
    {
      name: "model_9",
      sharpe_1d: 9,
      sharpe_7d: 18,
      sharpe_30d: 27,
      sharpe_90d: 36,
      sharpe_365d: 45,
    },
  ];

  const keys = Object.keys(ranking[0]);

  return (
    <div>
      <h4 className="font-extrabold tracking-tight">Standings</h4>
      <div className="overflow-x-auto">
        {" "}
        <Table className="w-full border border-gray-200 rounded-lg">
          <TableHeader className="bg-gray-100">
            <TableRow>
              {keys.map((key) => (
                <TableHead className="text-gray-700 text-center font-semibold p-2">
                  {key.toUpperCase()}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
  {ranking.map((model, index) => (
    <TableRow
      key={model.name}
      className={`${
        index % 2 === 0 ? "bg-gray-50" : "bg-white"
      } hover:bg-gray-100 transition duration-200`}
    >
      {Object.entries(model).map(([key, value]) => (
        <TableCell
          key={key}
          className={`font-medium text-center p-2 ${
            typeof value === "number" && value > 0
              ? "text-green-600"
              : typeof value === "number" && value <= 0
              ? "text-red-600"
              : "text-gray-800"
          }`}
        >
          {value}
        </TableCell>
      ))}
    </TableRow>
  ))}
</TableBody>

        </Table>
      </div>
    </div>
  );
}

export function Component() {
  const chartData = [
    { browser: "Browser 1", visitors: 0.89, fill: "hsl(178, 70%, 50%)" },
    { browser: "Browser 2", visitors: 1.321, fill: "hsl(335, 70%, 50%)" },
    { browser: "Browser 3", visitors: 0.914, fill: "hsl(149, 70%, 50%)" },
    { browser: "Browser 4", visitors: 0.279, fill: "hsl(351, 70%, 50%)" },
    { browser: "Browser 96", visitors: 0.941, fill: "hsl(234, 70%, 50%)" },
    { browser: "Browser 97", visitors: 1.896, fill: "hsl(174, 70%, 50%)" },
    { browser: "Browser 98", visitors: 1.797, fill: "hsl(240, 70%, 50%)" },
    { browser: "Browser 99", visitors: 0.181, fill: "hsl(9, 70%, 50%)" },
    { browser: "Browser 100", visitors: 1.167, fill: "hsl(108, 70%, 50%)" },
  ];

  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col bg-gradient-to-tr from-white via-gray-50 to-gray-100 shadow-md rounded-lg">
      <CardHeader className="items-center pb-4">
        <CardTitle className="text-lg font-bold text-gray-800">
          Pie Chart
        </CardTitle>
        <CardDescription className="text-gray-600">
          Distribution of the Last Portfolio
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors" nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export function App() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex flex-col items-center px-6">
        <div className="w-full max-w-5xl mt-10 bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-center text-5xl font-extrabold tracking-tight text-gray-900 lg:text-6xl">
            🧾 (asset) pricing robots
          </h1>
          <p className="text-center text-gray-600 text-sm mt-4">
            Ranking LLMs' investing performance.
          </p>

          <Separator className="my-6" />
          <Ranking />
          <div className="mt-8">
            <Component />
          </div>
        </div>
        <p className="my-5 text-center text-gray-600 text-sm">
          Made with <span className="text-red-500">❤️</span>. Design is not my
          passion.
        </p>
      </div>
    </div>
  );
}

export default App;
