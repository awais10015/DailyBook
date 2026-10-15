"use client";

import React, { useContext } from "react";
import Link from "next/link";
import {
  Receipt,
  CheckCircle2,
  Clock3,
  CircleX,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChartBarMultiple } from "@/components/charts/ChartBar";
import { ChartPieLegend } from "@/components/charts/ChartPie";
import { CustomerTable } from "@/components/table/Table";
import { StatCard } from "@/components/dashboard/StatCard";
import CurrentUserContext from "@/context/CurrentUserContext";
import {
  dashboardInvoices,
  getInvoiceStats,
} from "@/lib/dashboard-data";

const Dashboard = () => {
  const { currentLoggedInUser } = useContext(CurrentUserContext);
  const name = currentLoggedInUser?.name || "there";
  const stats = getInvoiceStats(dashboardInvoices);

  const statItems = [
    {
      label: "Total invoices",
      value: stats.total,
      icon: Receipt,
      accentClass: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    },
    {
      label: "Completed",
      value: stats.completed,
      icon: CheckCircle2,
      accentClass: "bg-[var(--brand)]/10 text-[var(--brand)]",
    },
    {
      label: "Pending",
      value: stats.pending,
      icon: Clock3,
      accentClass: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    },
    {
      label: "Unpaid",
      value: stats.canceled,
      icon: CircleX,
      accentClass: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 p-4 md:p-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Hello, {name}
          </h1>
          <p className="text-sm text-muted-foreground md:text-base">
            Here&apos;s how your business is performing this month.
          </p>
        </div>
        <Button
          asChild
          className="shrink-0 bg-[var(--brand)] text-white hover:bg-[var(--brand-hover)]"
        >
          <Link href="/invoice">
            <Plus className="h-4 w-4" />
            New invoice
          </Link>
        </Button>
      </header>

      <section
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
        aria-label="Invoice summary"
      >
        {statItems.map((item) => (
          <StatCard
            key={item.label}
            icon={item.icon}
            label={item.label}
            value={item.value}
            accentClass={item.accentClass}
          />
        ))}
      </section>

      <section aria-label="Cash flow">
        <ChartBarMultiple />
      </section>

      <section
        className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        aria-label="Expenses and recent invoices"
      >
        <ChartPieLegend />
        <CustomerTable />
      </section>
    </div>
  );
};

export default Dashboard;
