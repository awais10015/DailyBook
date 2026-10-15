"use client";

import { Card, CardContent } from "@/components/ui/card";

export function StatCard({ icon: Icon, label, value, accentClass }) {
  return (
    <Card className="border shadow-sm">
      <CardContent className="flex items-center gap-4 p-5">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${accentClass}`}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-2xl font-semibold tabular-nums tracking-tight">
            {value}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
