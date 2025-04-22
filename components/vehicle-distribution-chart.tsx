"use client"

import { Cell, Pie, PieChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Taxi de ville", value: 540 },
  { name: "Taxi brousse", value: 320 },
  { name: "Moto-taxi", value: 210 },
  { name: "Minibus", value: 178 },
]

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--primary) / 0.8)",
  "hsl(var(--primary) / 0.6)",
  "hsl(var(--primary) / 0.4)",
]

export function VehicleDistributionChart() {
  return (
    <ChartContainer
      config={{
        "Taxi de ville": {
          label: "Taxi de ville",
          color: COLORS[0],
        },
        "Taxi brousse": {
          label: "Taxi brousse",
          color: COLORS[1],
        },
        "Moto-taxi": {
          label: "Moto-taxi",
          color: COLORS[2],
        },
        Minibus: {
          label: "Minibus",
          color: COLORS[3],
        },
      }}
      className="h-[300px]"
    >
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <ChartTooltip content={<ChartTooltipContent />} />
      </PieChart>
    </ChartContainer>
  )
}
