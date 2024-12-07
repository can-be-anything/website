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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import ranking from "./data/prod-database/3-reporting/ranking.json";
import portfolios from "./data/prod-database/3-reporting/last_portfolio.json";

import { useState } from "react";

export function Ranking() {
  const cols = Object.keys(ranking[0]);

  return (
<div>
  <h4 className="font-extrabold tracking-tight m-1">Standings</h4>
  <div className="overflow-x-auto">
  <Table className="w-full border border-gray-200 rounded-lg table-fixed">
  <TableHeader className="bg-gray-100">
    <TableRow>
      {cols.map((key) => (
        <TableHead
          key={key}
          className="w-24 text-gray-700 text-center font-medium p-1 text-sm overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {key.toUpperCase()}
        </TableHead>
      ))}
    </TableRow>
  </TableHeader>
  <TableBody>
    {ranking.map((model, index) => (
      // Add "group" class on the row so we can use "group-hover" on cells
      <TableRow
        key={model.name}
        className={`${
          index % 2 === 0 ? "bg-gray-50" : "bg-white"
        } hover:bg-gray-100 transition duration-200 group`}
      >
        {Object.entries(model).map(([key, value]) => {
          const valueColor =
            typeof value === "number" && value > 1
              ? "text-green-600"
              : typeof value === "number" && value <= 0
              ? "text-red-600"
              : "text-gray-800";

          return (
            <TableCell
              key={key}
              className={`w-24 text-center p-1 text-sm ${valueColor}`}
            >
              <div
                className="
                  overflow-hidden text-ellipsis whitespace-nowrap 
                  group-hover:overflow-visible group-hover:whitespace-normal group-hover:text-clip group-hover:break-words
                "
              >
                {value}
              </div>
            </TableCell>
          );
        })}
      </TableRow>
    ))}
  </TableBody>
</Table>

  </div>
</div>

  );
}

export function Component() {
  const generateColor = (index, total) => {
    const hue = (index / total) * 360;
    return `hsla(${hue}, 70%, 60%, 0.99)`; // Add alpha for transparency
  };

  // State for the selected portfolio
  const [selectedPortfolio, setSelectedPortfolio] = useState("gpt-3.5-turbo/ranking/long_only");

  // Generate chart data based on the selected portfolio
  const chartData = portfolios[selectedPortfolio].map((item, index, array) => {
    const isNegative = item.weight < 0;
    
    // Create a display symbol with sign
    const displaySymbol = `${isNegative ? '-' : '+'}${item.symbol}`;
  
    // Convert the weight to a positive value for the chart, but keep track of the sign in the symbol
    const displayWeight = Math.abs(item.weight);
  
    return {
      ...item,
      symbol: displaySymbol,
      weight: displayWeight,
      fill: generateColor(index, array.length),
    };
  });
    
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col bg-gradient-to-tr from-white via-gray-50 to-gray-100 shadow-md rounded-lg">
      {/* Dropdown to select the portfolio */}
      <Select
        onValueChange={(value) => setSelectedPortfolio(value)} // Update selected portfolio
        value={selectedPortfolio}
      >
        <SelectTrigger className="m-5 w-[180px]">
          <SelectValue placeholder="Select Portfolio" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(portfolios).map((key) => (
            <SelectItem key={key} value={key}>
              {key}</SelectItem>
            ))}
        </SelectContent>
      </Select>

      <CardHeader className="items-center pb-4">
        <CardTitle className="text-lg font-bold text-gray-800">
          Pie Chart
        </CardTitle>
        <CardDescription className="text-gray-600">
          Distribution of the Selected Portfolio
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
            <Pie data={chartData} dataKey="weight" nameKey="symbol" />
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
        <div className="w-full max-w-7xl mt-10 bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-center text-5xl font-extrabold font-mono tracking-tight text-gray-900 lg:text-6xl">
            🎰 (asset) pricing robots
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
