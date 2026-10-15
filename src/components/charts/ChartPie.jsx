"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { expenseBreakdownData } from "@/lib/dashboard-data";

const chartConfig = {
  amount: {
    label: "Amount",
  },
  payroll: {
    label: "Payroll",
    color: "var(--chart-1)",
  },
  rent: {
    label: "Rent",
    color: "var(--chart-2)",
  },
  supplies: {
    label: "Supplies",
    color: "var(--chart-3)",
  },
  utilities: {
    label: "Utilities",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
};

export function ChartPieLegend() {
  return (
    <Card className="flex h-full flex-col border shadow-sm">
      <CardHeader>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Expenses
        </p>
        <CardTitle className="text-xl">See where your money is going</CardTitle>
        <CardDescription>
          Breakdown of spending by category this month.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Pie data={expenseBreakdownData} dataKey="amount" nameKey="category" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="category" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/3 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
