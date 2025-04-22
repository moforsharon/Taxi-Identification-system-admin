"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Plus, Search } from "lucide-react"

// Sample data
const routes = [
  {
    id: "1",
    name: "Route A",
    description: "Douala Central Market to Bonaberi",
    municipality: "Douala",
    vehicleCount: 120,
    status: "active",
    startPoint: "Douala Central Market",
    endPoint: "Bonaberi",
    distance: "12.5 km",
    estimatedTime: "35 min",
  },
  {
    id: "2",
    name: "Route B",
    description: "Yaoundé Central to Mvan",
    municipality: "Yaoundé",
    vehicleCount: 98,
    status: "active",
    startPoint: "Yaoundé Central",
    endPoint: "Mvan",
    distance: "8.2 km",
    estimatedTime: "25 min",
  },
  {
    id: "3",
    name: "Route C",
    description: "Buea Town to Mile 17",
    municipality: "Buea",
    vehicleCount: 86,
    status: "active",
    startPoint: "Buea Town",
    endPoint: "Mile 17",
    distance: "5.7 km",
    estimatedTime: "15 min",
  },
  {
    id: "4",
    name: "Route D",
    description: "Limbe Down Beach to Mile 4",
    municipality: "Limbe",
    vehicleCount: 75,
    status: "active",
    startPoint: "Limbe Down Beach",
    endPoint: "Mile 4",
    distance: "7.3 km",
    estimatedTime: "20 min",
  },
  {
    id: "5",
    name: "Route E",
    description: "Bafoussam Market to Mifi",
    municipality: "Bafoussam",
    vehicleCount: 65,
    status: "active",
    startPoint: "Bafoussam Market",
    endPoint: "Mifi",
    distance: "6.8 km",
    estimatedTime: "18 min",
  },
  {
    id: "6",
    name: "Route F",
    description: "Douala Airport to Bonanjo",
    municipality: "Douala",
    vehicleCount: 54,
    status: "inactive",
    startPoint: "Douala Airport",
    endPoint: "Bonanjo",
    distance: "9.1 km",
    estimatedTime: "30 min",
  },
]

export default function RoutesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredRoutes = routes.filter(
    (route) =>
      route.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.municipality.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.startPoint.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.endPoint.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Routes</h1>
          <p className="text-muted-foreground">Manage and assign routes for taxis in the system</p>
        </div>
        <Button className="w-full md:w-auto bg-[#0E0E64]">
          <Plus className="mr-2 h-4 w-4" />
          Add Route
        </Button>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search routes..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredRoutes.map((route) => (
          <Card key={route.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{route.name}</CardTitle>
                <Badge variant="outline" className={`status-badge ${route.status}`}>
                  {route.status.charAt(0).toUpperCase() + route.status.slice(1)}
                </Badge>
              </div>
              <CardDescription>{route.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Municipality:</span>
                  <span className="ml-auto font-medium">{route.municipality}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-muted-foreground">Start Point:</span>
                  <span className="ml-auto font-medium">{route.startPoint}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-muted-foreground">End Point:</span>
                  <span className="ml-auto font-medium">{route.endPoint}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-muted-foreground">Distance:</span>
                  <span className="ml-auto font-medium">{route.distance}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-muted-foreground">Est. Time:</span>
                  <span className="ml-auto font-medium">{route.estimatedTime}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-muted-foreground">Assigned Vehicles:</span>
                  <span className="ml-auto font-medium">{route.vehicleCount}</span>
                </div>
                <div className="pt-2">
                  <Button variant="outline" className="w-full">
                    Manage Vehicles
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
