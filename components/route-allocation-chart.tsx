"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Route Y1", vehicles: 98 },
  { name: "Route Y2", vehicles: 86 },
  { name: "Route Y3", vehicles: 75 },
  { name: "Route Y4", vehicles: 65 },
  { name: "Route Y5", vehicles: 54 },
  { name: "Route Y6", vehicles: 42 },
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
