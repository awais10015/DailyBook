"use client";

import { ContactsListPage } from "@/components/contacts/ContactsListPage";

const Invoice = () => (
  <ContactsListPage
    title="Invoices"
    description="Quick access to customer and supplier invoices with payment status."
    entitySingular="invoice"
    addLabel="Create invoice"
    showPartyTabs
    showBalanceSection
  />
);

export default Invoice;
