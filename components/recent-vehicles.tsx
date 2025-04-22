"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

const recentVehicles = [
  {
    immatric: "CE705LU",
    make: "TOYOTA",
    owner: "KAMGA TABUE LEONNEL GIRESSE",
    driver: "TOMAGAM MARTIN DESIRE",
    route: "Route A",
    status: "active",
  },
  {
    immatric: "CE508NO",
    make: "TOYOTA",
    owner: "DIVINE TAKUBANDE",
    driver: "JEAN PIERRE KAMDEM",
    route: "Route C",
    status: "active",
  },
  {
    immatric: "LT705CE",
    make: "HONDA",
    owner: "MBARGA JOSEPH",
    driver: "MBARGA JOSEPH",
    route: "Route B",
    status: "inactive",
  },
  {
    immatric: "CE123AB",
    make: "NISSAN",
    owner: "NKENG MARIE",
    driver: "TABI EMMANUEL",
    route: "Route D",
    status: "pending",
  },
]

export function RecentVehicles() {
  return (
    <div className="overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Immatric</TableHead>
            <TableHead>Make</TableHead>
            <TableHead className="hidden md:table-cell">Owner</TableHead>
            <TableHead className="hidden md:table-cell">Driver</TableHead>
            <TableHead>Route</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentVehicles.map((vehicle) => (
            <TableRow key={vehicle.immatric}>
              <TableCell className="font-medium">{vehicle.immatric}</TableCell>
              <TableCell>{vehicle.make}</TableCell>
              <TableCell className="hidden md:table-cell">{vehicle.owner}</TableCell>
              <TableCell className="hidden md:table-cell">{vehicle.driver}</TableCell>
              <TableCell>{vehicle.route}</TableCell>
              <TableCell>
                <Badge variant="outline" className={`status-badge ${vehicle.status}`}>
                  {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">View details</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
