"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", registrations: 65, renewals: 42 },
  { month: "Feb", registrations: 59, renewals: 38 },
  { month: "Mar", registrations: 80, renewals: 56 },
  { month: "Apr", registrations: 81, renewals: 63 },
  { month: "May", registrations: 56, renewals: 42 },
  { month: "Jun", registrations: 55, renewals: 40 },
  { month: "Jul", registrations: 40, renewals: 30 },
  { month: "Aug", registrations: 45, renewals: 35 },
  { month: "Sep", registrations: 62, renewals: 48 },
  { month: "Oct", registrations: 75, renewals: 52 },
  { month: "Nov", registrations: 85, renewals: 61 },
  { month: "Dec", registrations: 79, renewals: 58 },
]

export function OverviewChart() {
  return (
    <ChartContainer
      config={{
        registrations: {
          label: "New Registrations",
          color: "hsl(var(--primary))",
        },
        renewals: {
          label: "Renewals",
          color: "hsl(var(--muted-foreground))",
        },
      }}
      className="h-[300px]"
    >
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
        <Bar dataKey="registrations" fill="var(--color-registrations)" radius={[4, 4, 0, 0]} barSize={8} />
        <Bar dataKey="renewals" fill="var(--color-renewals)" radius={[4, 4, 0, 0]} barSize={8} />
      </BarChart>
    </ChartContainer>
  )
}
