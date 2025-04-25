"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Plus, Search } from "lucide-react"

// Sample data - Focused on Yaoundé municipality
const routes = [
  {
    id: "1",
    name: "Route Y1",
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
    id: "2",
    name: "Route Y2",
    description: "Nsimeyong to Ngoa-Ekelle",
    municipality: "Yaoundé",
    vehicleCount: 86,
    status: "active",
    startPoint: "Nsimeyong",
    endPoint: "Ngoa-Ekelle",
    distance: "5.7 km",
    estimatedTime: "15 min",
  },
  {
    id: "3",
    name: "Route Y3",
    description: "Mokolo Market to Biyem-Assi",
    municipality: "Yaoundé",
    vehicleCount: 75,
    status: "active",
    startPoint: "Mokolo Market",
    endPoint: "Biyem-Assi",
    distance: "7.3 km",
    estimatedTime: "20 min",
  },
  {
    id: "4",
    name: "Route Y4",
    description: "Omnisport to Bastos",
    municipality: "Yaoundé",
    vehicleCount: 65,
    status: "active",
    startPoint: "Omnisport",
    endPoint: "Bastos",
    distance: "6.8 km",
    estimatedTime: "18 min",
  },
  {
    id: "5",
    name: "Route Y5",
    description: "Etoudi to Mvog-Mbi",
    municipality: "Yaoundé",
    vehicleCount: 54,
    status: "active",
    startPoint: "Etoudi",
    endPoint: "Mvog-Mbi",
    distance: "9.1 km",
    estimatedTime: "30 min",
  },
  {
    id: "6",
    name: "Route Y6",
    description: "Emana to Elig-Essono",
    municipality: "Yaoundé",
    vehicleCount: 42,
    status: "active",
    startPoint: "Emana",
    endPoint: "Elig-Essono",
    distance: "10.5 km",
    estimatedTime: "35 min",
  },
  {
    id: "7",
    name: "Route Y7",
    description: "Mimboman to Nkolbisson",
    municipality: "Yaoundé",
    vehicleCount: 38,
    status: "active",
    startPoint: "Mimboman",
    endPoint: "Nkolbisson",
    distance: "12.3 km",
    estimatedTime: "40 min",
  },
  {
    id: "8",
    name: "Route Y8",
    description: "Yaoundé Airport to City Center",
    municipality: "Yaoundé",
    vehicleCount: 45,
    status: "active",
    startPoint: "Yaoundé Airport",
    endPoint: "City Center",
    distance: "11.7 km",
    estimatedTime: "35 min",
  },
  {
    id: "9",
    name: "Route Y9",
    description: "Messassi to Ahala",
    municipality: "Yaoundé",
    vehicleCount: 32,
    status: "inactive",
    startPoint: "Messassi",
    endPoint: "Ahala",
    distance: "13.5 km",
    estimatedTime: "45 min",
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
          <h1 className="text-2xl font-bold tracking-tight">Yaoundé Routes</h1>
          <p className="text-muted-foreground">Manage and assign taxi routes in Yaoundé municipality</p>
        </div>
        <Button className="w-full md:w-auto">
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
          <Card key={route.id} className="border-lavender/50 hover:border-lavender transition-colors">
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
                  <MapPin className="mr-2 h-4 w-4 text-cyan" />
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
                  <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white">
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
