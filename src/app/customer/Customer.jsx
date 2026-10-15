"use client";

import { ContactsListPage } from "@/components/contacts/ContactsListPage";

const Customer = () => (
  <ContactsListPage
    title="Customers"
    description="Create and manage customers with contact and billing details."
    entitySingular="customer"
    addLabel="Add customer"
  />
);

export default Customer;
