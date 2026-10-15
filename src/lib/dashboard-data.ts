export type InvoiceStatus = "Paid" | "Pending" | "Unpaid";

export type DashboardInvoice = {
  id: number;
  customer: string;
  totalAmount: number;
  date: string;
  status: InvoiceStatus;
};

export const dashboardInvoices: DashboardInvoice[] = [
  {
    id: 1,
    customer: "John Doe",
    totalAmount: 250,
    date: "2025-08-01",
    status: "Paid",
  },
  {
    id: 2,
    customer: "Jane Smith",
    totalAmount: 150,
    date: "2025-08-03",
    status: "Pending",
  },
  {
    id: 3,
    customer: "Michael Lee",
    totalAmount: 350,
    date: "2025-08-04",
    status: "Unpaid",
  },
  {
    id: 4,
    customer: "Emily Brown",
    totalAmount: 450,
    date: "2025-08-05",
    status: "Paid",
  },
  {
    id: 5,
    customer: "David Wilson",
    totalAmount: 550,
    date: "2025-08-06",
    status: "Paid",
  },
  {
    id: 6,
    customer: "Sophia Taylor",
    totalAmount: 200,
    date: "2025-08-07",
    status: "Pending",
  },
  {
    id: 7,
    customer: "Chris Johnson",
    totalAmount: 300,
    date: "2025-08-08",
    status: "Unpaid",
  },
  {
    id: 8,
    customer: "Olivia White",
    totalAmount: 250,
    date: "2025-08-09",
    status: "Paid",
  },
  {
    id: 9,
    customer: "Chris Johnson",
    totalAmount: 300,
    date: "2025-08-10",
    status: "Unpaid",
  },
  {
    id: 10,
    customer: "Olivia White",
    totalAmount: 250,
    date: "2025-08-11",
    status: "Paid",
  },
];

export function getInvoiceStats(invoices: DashboardInvoice[]) {
  const total = invoices.length;
  const completed = invoices.filter((i) => i.status === "Paid").length;
  const pending = invoices.filter((i) => i.status === "Pending").length;
  const canceled = invoices.filter((i) => i.status === "Unpaid").length;

  return { total, completed, pending, canceled };
}

export const cashFlowChartData = [
  { month: "Jan", income: 4200, expenses: 2800 },
  { month: "Feb", income: 5100, expenses: 3200 },
  { month: "Mar", income: 4800, expenses: 2900 },
  { month: "Apr", income: 3900, expenses: 3100 },
  { month: "May", income: 5500, expenses: 3400 },
  { month: "Jun", income: 6200, expenses: 3600 },
  { month: "Jul", income: 5800, expenses: 3300 },
  { month: "Aug", income: 6400, expenses: 3700 },
  { month: "Sep", income: 5900, expenses: 3500 },
  { month: "Oct", income: 6100, expenses: 3800 },
  { month: "Nov", income: 6700, expenses: 3900 },
  { month: "Dec", income: 7200, expenses: 4100 },
];

export const expenseBreakdownData = [
  { category: "payroll", amount: 4200, fill: "var(--color-payroll)" },
  { category: "rent", amount: 2800, fill: "var(--color-rent)" },
  { category: "supplies", amount: 1900, fill: "var(--color-supplies)" },
  { category: "utilities", amount: 1200, fill: "var(--color-utilities)" },
  { category: "other", amount: 900, fill: "var(--color-other)" },
];
