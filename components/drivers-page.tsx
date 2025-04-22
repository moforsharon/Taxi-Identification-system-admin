"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Download, Filter, Plus, Search, SlidersHorizontal } from "lucide-react"

// Sample data
const drivers = [
  {
    id: "e128bab5-44aa-4f28-9dd3-17785c568940",
    name: "TOMAGAM MARTIN DESIRE",
    typepermis: "B",
    numeperm: "OU-110414-10",
    datdelpermis: "2016-05-06",
    dateexpiration: "2026-05-06",
    statutpermis: "Valide",
    vehicles: ["CE705LU"],
    municipality: "Douala",
    status: "active",
  },
  {
    id: "f238bab5-44aa-4f28-9dd3-17785c568941",
    name: "JEAN PIERRE KAMDEM",
    typepermis: "B",
    numeperm: "YA-220515-12",
    datdelpermis: "2018-07-12",
    dateexpiration: "2028-07-12",
    statutpermis: "Valide",
    vehicles: ["CE508NO"],
    municipality: "Yaoundé",
    status: "active",
  },
  {
    id: "g348bab5-44aa-4f28-9dd3-17785c568942",
    name: "MBARGA JOSEPH",
    typepermis: "B",
    numeperm: "BU-330616-15",
    datdelpermis: "2020-01-30",
    dateexpiration: "2020-01-30",
    statutpermis: "Expiré",
    vehicles: ["LT705CE"],
    municipality: "Buea",
    status: "inactive",
  },
  {
    id: "h458bab5-44aa-4f28-9dd3-17785c568943",
    name: "TABI EMMANUEL",
    typepermis: "B",
    numeperm: "LI-440717-18",
    datdelpermis: "2022-03-10",
    dateexpiration: "2032-03-10",
    statutpermis: "Valide",
    vehicles: ["CE123AB"],
    municipality: "Limbe",
    status: "active",
  },
  {
    id: "i568bab5-44aa-4f28-9dd3-17785c568944",
    name: "KAMGA ERIC",
    typepermis: "B",
    numeperm: "BA-550818-20",
    datdelpermis: "2019-05-15",
    dateexpiration: "2029-05-15",
    statutpermis: "Valide",
    vehicles: ["BA456CD"],
    municipality: "Bafoussam",
    status: "active",
  },
  {
    id: "j678bab5-44aa-4f28-9dd3-17785c568945",
    name: "ATANGANA PAUL",
    typepermis: "B",
    numeperm: "YA-660919-22",
    datdelpermis: "2021-09-20",
    dateexpiration: "2031-09-20",
    statutpermis: "Valide",
    vehicles: ["YA789EF"],
    municipality: "Yaoundé",
    status: "active",
  },
]

export default function DriversPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDrivers = drivers.filter(
    (driver) =>
      driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      driver.numeperm.toLowerCase().includes(searchQuery.toLowerCase()) ||
      driver.municipality.toLowerCase().includes(searchQuery.toLowerCase()) ||
      driver.vehicles.some((v) => v.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Drivers</h1>
          <p className="text-muted-foreground">Manage and monitor all registered drivers in the system</p>
        </div>
        <Button className="w-full md:w-auto bg-[#0E0E64]">
          <Plus className="mr-2 h-4 w-4" />
          Add Driver
        </Button>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by name, license number, vehicle..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
            <span className="sr-only">Download</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                <span className="hidden md:inline">Filter</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All Drivers</DropdownMenuItem>
              <DropdownMenuItem>Active Drivers</DropdownMenuItem>
              <DropdownMenuItem>Inactive Drivers</DropdownMenuItem>
              <DropdownMenuItem>Expired License</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>
      </div>
      <Card>
        <CardContent className="p-0">
          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>License Number</TableHead>
                  <TableHead className="hidden md:table-cell">License Type</TableHead>
                  <TableHead className="hidden md:table-cell">Expiration</TableHead>
                  <TableHead className="hidden md:table-cell">Vehicles</TableHead>
                  <TableHead>Municipality</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDrivers.map((driver) => (
                  <TableRow key={driver.id}>
                    <TableCell className="font-medium">{driver.name}</TableCell>
                    <TableCell>{driver.numeperm}</TableCell>
                    <TableCell className="hidden md:table-cell">{driver.typepermis}</TableCell>
                    <TableCell className="hidden md:table-cell">{driver.dateexpiration}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      {driver.vehicles.map((vehicle) => (
                        <Badge key={vehicle} variant="outline" className="mr-1">
                          {vehicle}
                        </Badge>
                      ))}
                    </TableCell>
                    <TableCell>{driver.municipality}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`status-badge ${driver.status}`}>
                        {driver.status.charAt(0).toUpperCase() + driver.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="bg-[#44D5FB]">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
