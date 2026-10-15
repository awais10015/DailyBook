"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { dashboardInvoices } from "@/lib/dashboard-data";

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

function formatDate(isoDate) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(isoDate));
}

function StatusBadge({ status }) {
  if (status === "Paid") {
    return (
      <Badge
        variant="outline"
        className="border-[var(--brand)]/40 bg-[var(--brand)]/10 text-[var(--brand)]"
      >
        {status}
      </Badge>
    );
  }
  if (status === "Pending") {
    return (
      <Badge
        variant="outline"
        className="border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400"
      >
        {status}
      </Badge>
    );
  }
  return <Badge variant="destructive">{status}</Badge>;
}

export function CustomerTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalItems = dashboardInvoices.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = dashboardInvoices.slice(startIndex, endIndex);

  return (
    <Card className="flex h-full flex-col border shadow-sm">
      <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0 pb-4">
        <div className="space-y-1">
          <CardTitle className="text-xl">Recent invoices</CardTitle>
          <CardDescription>Latest activity from your customers</CardDescription>
        </div>
        <Link
          href="/invoice"
          className="text-sm font-medium text-[var(--brand)] hover:underline"
        >
          View all
        </Link>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-0 pt-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="pl-6">Customer</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="pr-6 text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.map((invoice) => (
                <TableRow
                  key={invoice.id}
                  className="hover:bg-muted/40"
                >
                  <TableCell className="pl-6 font-medium">
                    {invoice.customer}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {formatCurrency(invoice.totalAmount)}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {formatDate(invoice.date)}
                  </TableCell>
                  <TableCell className="pr-6 text-center">
                    <StatusBadge status={invoice.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-auto flex items-center justify-between border-t px-6 py-4">
          <p className="text-sm text-muted-foreground">
            Showing {startIndex + 1}–{endIndex} of {totalItems}
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
