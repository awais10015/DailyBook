"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cashFlowChartData } from "@/lib/dashboard-data";

const chartConfig = {
  income: {
    label: "Income",
    color: "#53b700",
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-2)",
  },
};

export function ChartBarMultiple() {
  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Cash flow trends
        </p>
        <CardTitle className="text-xl">Track how your money is doing</CardTitle>
        <CardDescription>
          Monthly income compared to expenses across the year.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-72 w-full min-h-[280px]"
        >
          <BarChart
            data={cashFlowChartData}
            margin={{ top: 8, right: 8, bottom: 0, left: 0 }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              className="stroke-border/60"
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={8}
              axisLine={false}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              allowDecimals={false}
              tickFormatter={(v) => `$${v / 1000}k`}
            />
            <ChartTooltip
              cursor={{ fill: "var(--muted)", opacity: 0.3 }}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="income"
              fill="var(--color-income)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="expenses"
              fill="var(--color-expenses)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
