"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  CirclePlus,
  Funnel,
  Search,
  Ellipsis,
  Pencil,
  Trash2,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ContactFormFields } from "@/components/contacts/ContactFormFields";
import { contactsData } from "@/lib/contacts-data";
import { cn } from "@/lib/utils";

const brandButtonClass =
  "bg-[var(--brand)] text-white hover:bg-[var(--brand-hover)]";

export function ContactsListPage({
  title,
  description,
  entitySingular,
  addLabel,
  showPartyTabs = false,
  showBalanceSection = false,
}) {
  const [data, setData] = useState(contactsData);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [partyType, setPartyType] = useState("customer");
  const itemsPerPage = 10;

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return data.filter(
      (row) =>
        row.name.toLowerCase().includes(q) ||
        row.email.toLowerCase().includes(q) ||
        row.city.toLowerCase().includes(q)
    );
  }, [data, search]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, partyType]);

  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = filtered.slice(startIndex, endIndex);

  const toggleSelect = (user) => {
    setSelected((prev) =>
      prev.some((u) => u.name === user.name)
        ? prev.filter((n) => n.name !== user.name)
        : [...prev, user]
    );
  };

  const toggleSelectAll = (checked) => {
    if (checked) {
      setSelected(currentItems);
    } else {
      setSelected([]);
    }
  };

  const onDelete = (user, selectedUsers = []) => {
    if (user) {
      setData((prev) => prev.filter((e) => e.name !== user.name));
      setSelected((prev) => prev.filter((u) => u.name !== user.name));
    } else if (selectedUsers.length > 0) {
      const names = new Set(selectedUsers.map((u) => u.name));
      setData((prev) => prev.filter((e) => !names.has(e.name)));
      setSelected([]);
    }
  };

  const entityCapitalized =
    entitySingular.charAt(0).toUpperCase() + entitySingular.slice(1);

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h1>
          <p className="text-sm text-muted-foreground md:text-base">
            {description}
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className={cn("shrink-0 rounded-lg", brandButtonClass)}>
              <CirclePlus className="h-4 w-4" />
              {addLabel}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Add {entityCapitalized}</DialogTitle>
              <DialogDescription>
                Contact and billing details for your records.
              </DialogDescription>
            </DialogHeader>
            <ContactFormFields />
            <DialogFooter className="gap-2 sm:gap-0">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="button" className={brandButtonClass}>
                Create
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </header>

      <Card className="border shadow-sm">
        <CardContent className="flex flex-col gap-4 p-4 md:flex-row md:flex-wrap md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search ${title.toLowerCase()}…`}
              className="h-10 pl-9"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" className="h-10 gap-2">
              <Funnel className="h-4 w-4" />
              Filter
            </Button>
            {selected.length > 0 && (
              <>
                <span className="text-sm text-muted-foreground">
                  {selected.length} selected
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelected([])}
                >
                  Deselect
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => onDelete(null, selected)}
                >
                  Delete
                </Button>
              </>
            )}
            {showPartyTabs && (
              <div
                className="inline-flex rounded-lg border bg-muted/50 p-1"
                role="tablist"
                aria-label="Invoice party type"
              >
                <Button
                  type="button"
                  size="sm"
                  variant={partyType === "supplier" ? "default" : "ghost"}
                  className={cn(
                    "h-8 rounded-md",
                    partyType === "supplier" && brandButtonClass
                  )}
                  onClick={() => setPartyType("supplier")}
                >
                  Suppliers
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant={partyType === "customer" ? "default" : "ghost"}
                  className={cn(
                    "h-8 rounded-md",
                    partyType === "customer" && brandButtonClass
                  )}
                  onClick={() => setPartyType("customer")}
                >
                  Customers
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border shadow-sm">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="w-10 pl-4">
                  <Checkbox
                    checked={
                      currentItems.length > 0 &&
                      currentItems.every((row) =>
                        selected.some((s) => s.name === row.name)
                      )
                    }
                    onCheckedChange={(v) => toggleSelectAll(v === true)}
                    aria-label="Select all on page"
                  />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Email</TableHead>
                <TableHead className="hidden lg:table-cell">Phone</TableHead>
                <TableHead className="hidden sm:table-cell">City</TableHead>
                <TableHead className="pr-4 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.map((user) => (
                <TableRow key={user.name} className="hover:bg-muted/40">
                  <TableCell className="pl-4">
                    <Checkbox
                      checked={selected.some((s) => s.name === user.name)}
                      onCheckedChange={() => toggleSelect(user)}
                      aria-label={`Select ${user.name}`}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell className="hidden max-w-[200px] truncate text-muted-foreground md:table-cell">
                    {user.email}
                  </TableCell>
                  <TableCell className="hidden tabular-nums text-muted-foreground lg:table-cell">
                    {user.phoneNumber}
                  </TableCell>
                  <TableCell className="hidden text-muted-foreground sm:table-cell">
                    {user.city}
                  </TableCell>
                  <TableCell className="pr-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hidden text-[var(--brand)] hover:text-[var(--brand-hover)] sm:inline-flex"
                      >
                        Create invoice
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Ellipsis className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <Dialog>
                            <DialogTrigger asChild>
                              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                <Pencil className="mr-2 h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
                              <DialogHeader>
                                <DialogTitle>
                                  Edit {entityCapitalized}
                                </DialogTitle>
                                <DialogDescription>
                                  Update contact and billing details.
                                </DialogDescription>
                              </DialogHeader>
                              <ContactFormFields />
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button type="button" className={brandButtonClass}>
                                  Save
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          <DropdownMenuSeparator />
                          <Dialog>
                            <DialogTrigger asChild>
                              <DropdownMenuItem
                                onSelect={(e) => e.preventDefault()}
                                className="text-destructive focus:text-destructive"
                              >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                              <DialogHeader>
                                <DialogTitle>
                                  Delete {entityCapitalized}?
                                </DialogTitle>
                                <DialogDescription>
                                  This removes {user.name} from your list. This
                                  action cannot be undone in this demo.
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button
                                  variant="destructive"
                                  onClick={() => onDelete(user)}
                                >
                                  Delete
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex flex-col gap-3 border-t px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm text-muted-foreground">
            Showing {totalItems === 0 ? 0 : startIndex + 1}–{endIndex} of{" "}
            {totalItems}
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
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </Card>

      {showBalanceSection && (
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              {partyType === "customer" ? "Customer" : "Supplier"} balance
              tracking
            </h2>
            <p className="text-sm text-muted-foreground">
              Snapshot of outstanding amounts for key accounts.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["John Robb", "Emily Parrish", "Leon Scott"].map((name) => (
              <Card key={name} className="border shadow-sm">
                <CardHeader className="pb-2">
                  <Badge
                    variant="outline"
                    className="w-fit border-[var(--brand)]/30 bg-[var(--brand)]/10 text-[var(--brand)]"
                  >
                    {partyType === "customer" ? "Customer" : "Supplier"}: {name}
                  </Badge>
                  <CardDescription>Updated Apr 12, 2024</CardDescription>
                </CardHeader>
                <CardContent className="space-y-1 text-sm">
                  <p>Total invoices: <span className="font-medium">5</span></p>
                  <p>Total paid: <span className="font-medium">$3,000</span></p>
                  <p>
                    Outstanding:{" "}
                    <span className="font-medium text-amber-600 dark:text-amber-400">
                      $1,000
                    </span>
                  </p>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-[var(--brand)]"
                  >
                    <FileText className="mr-1 h-4 w-4" />
                    View invoices
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
