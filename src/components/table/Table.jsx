"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const invoices = [
  {
    id: 1,
    customer: "John Doe",
    totalAmount: "$250.00",
    date: "2025-08-01",
    status: "Paid",
  },
  {
    id: 2,
    customer: "Jane Smith",
    totalAmount: "$150.00",
    date: "2025-08-03",
    status: "Pending",
  },
  {
    id: 3,
    customer: "Michael Lee",
    totalAmount: "$350.00",
    date: "2025-08-04",
    status: "Unpaid",
  },
  {
    id: 4,
    customer: "Emily Brown",
    totalAmount: "$450.00",
    date: "2025-08-05",
    status: "Paid",
  },
  {
    id: 5,
    customer: "David Wilson",
    totalAmount: "$550.00",
    date: "2025-08-06",
    status: "Paid",
  },
  {
    id: 6,
    customer: "Sophia Taylor",
    totalAmount: "$200.00",
    date: "2025-08-07",
    status: "Pending",
  },
  {
    id: 7,
    customer: "Chris Johnson",
    totalAmount: "$300.00",
    date: "2025-08-08",
    status: "Unpaid",
  },
  {
    id: 8,
    customer: "Olivia White",
    totalAmount: "$250.00",
    date: "2025-08-09",
    status: "Paid",
  },
  {
    id: 9,
    customer: "Chris Johnson",
    totalAmount: "$300.00",
    date: "2025-08-08",
    status: "Unpaid",
  },
  {
    id: 10,
    customer: "Olivia White",
    totalAmount: "$250.00",
    date: "2025-08-09",
    status: "Paid",
  },
];

export function CustomerTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalItems = invoices.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = invoices.slice(startIndex, endIndex);

  return (
    <div className="w-full  overflow-x-auto rounded-2xl border shadow-md">
      <Table className="table-auto w-full border-collapse overflow-hidden scrollbar-hide">
       
        <TableHeader >
          <TableRow className="bg-[#54b700]/10 text-md font-bold">
            <TableHead className="py-5 px-5 text-left w-[30%]">
              Customer Name
            </TableHead>
            <TableHead className="py-5 px-3 text-center w-[20%]">
              Total Amount
            </TableHead>
            <TableHead className="py-5 px-3 text-center w-[20%]">
              Date
            </TableHead>
            <TableHead className="py-5 px-3 text-center w-[20%]">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody >
          {currentItems.map((invoice) => (
            <TableRow key={invoice.id} className="border-b font-light text-md">
              <TableCell className="py-4 px-5 text-left font-medium w-[30%]">
                {invoice.customer}
              </TableCell>
              <TableCell className="py-4 px-3 text-center w-[20%]">
                {invoice.totalAmount}
              </TableCell>
              <TableCell className="py-4 px-3 text-center w-[20%]">
                {invoice.date}
              </TableCell>
              <TableCell className="py-4 px-3 text-center font-semibold w-[20%]">
                {invoice.status.toLowerCase() === "paid" ||
                invoice.status.toLowerCase() === "complete" ? (
                  <Badge variant="secondary">{invoice.status}</Badge>
                ) : (
                  <Badge variant="destructive">{invoice.status}</Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        
        <TableFooter>
        
        </TableFooter>
      </Table>

     
      <div className="flex items-center border-t justify-between px-5 py-5">
        <p className="text-sm text-gray-600">
          Showing {startIndex + 1}–{endIndex} of {totalItems} items
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
    </div>
  );
}
