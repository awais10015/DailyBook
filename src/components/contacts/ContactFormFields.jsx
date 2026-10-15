"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ContactFormFields() {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Account information</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="contact-name">Name</Label>
            <Input id="contact-name" name="name" placeholder="Full name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email">Email</Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              placeholder="email@company.com"
            />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="contact-phone">Mobile number</Label>
            <Input id="contact-phone" name="phone" placeholder="Phone number" />
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Billing address</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="contact-street1">Street address</Label>
            <Input id="contact-street1" placeholder="Address line 1" />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="contact-street2">Street address 2</Label>
            <Input id="contact-street2" placeholder="Optional" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-city">City</Label>
            <Input id="contact-city" placeholder="City" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-state">State</Label>
            <Input id="contact-state" placeholder="State" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-country">Country</Label>
            <Input id="contact-country" placeholder="Country" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-postcode">Postcode</Label>
            <Input id="contact-postcode" placeholder="Postcode" />
          </div>
        </div>
      </div>
    </div>
  );
}
