"use client";

import { ContactsListPage } from "@/components/contacts/ContactsListPage";

const Supplier = () => (
  <ContactsListPage
    title="Suppliers"
    description="Create and manage suppliers with contact and billing details."
    entitySingular="supplier"
    addLabel="Add supplier"
  />
);

export default Supplier;
