"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Route A", vehicles: 120 },
  { name: "Route B", vehicles: 98 },
  { name: "Route C", vehicles: 86 },
  { name: "Route D", vehicles: 75 },
  { name: "Route E", vehicles: 65 },
  { name: "Route F", vehicles: 54 },
]

export function RouteAllocationChart() {
  return (
    <ChartContainer
      config={{
        vehicles: {
          label: "Vehicles",
          color: "#44D5FB",
        },
      }}
      className="h-[300px]"
    >
      <BarChart
        layout="vertical"
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis type="number" tickLine={false} axisLine={false} />
        <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} width={60} />
        <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
        <Bar dataKey="vehicles" fill="var(--color-vehicles)" radius={[0, 4, 4, 0]} barSize={20} />
      </BarChart>
    </ChartContainer>
  )
}
