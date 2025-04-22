"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Car, CheckCircle, MapPin, Route, Users } from "lucide-react"
import { OverviewChart } from "@/components/overview-chart"
import { RecentVehicles } from "@/components/recent-vehicles"
import { VehicleDistributionChart } from "@/components/vehicle-distribution-chart"
import { RouteAllocationChart } from "@/components/route-allocation-chart"

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Vehicles</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            {/* <p className="text-xs text-muted-foreground">+12 from last month</p> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Drivers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">892</div>
            {/* <p className="text-xs text-muted-foreground">+18 from last month</p> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Assigned Routes</CardTitle>
            <Route className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">56</div>
            {/* <p className="text-xs text-muted-foreground">+3 from last month</p> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
      </div>
      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Vehicle Registration Overview</CardTitle>
            <CardDescription>Monthly vehicle registrations for the current year</CardDescription>
          </CardHeader>
          <CardContent>
            <OverviewChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Vehicle Distribution</CardTitle>
            <CardDescription>Distribution by vehicle type</CardDescription>
          </CardHeader>
          <CardContent>
            <VehicleDistributionChart />
          </CardContent>
        </Card>
      </div> */}
      <div className="flex w-full">
        <Card className=" w-full overflow-hidden overflow-x-scroll">
          <CardHeader>
            <CardTitle>Route Allocation</CardTitle>
            <CardDescription>Distribution of vehicles by route</CardDescription>
          </CardHeader>
          <CardContent>
            <RouteAllocationChart />
          </CardContent>
        </Card>
        {/* <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Vehicles</CardTitle>
            <CardDescription>Recently registered or updated vehicles</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentVehicles />
          </CardContent>
        </Card> */}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Compliance Alerts</CardTitle>
            <CardDescription>Vehicles with compliance issues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-500" />
                <div>
                  <p className="font-medium">CE508NO</p>
                  <p className="text-sm text-muted-foreground">Insurance expires in 3 days</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 text-red-500" />
                <div>
                  <p className="font-medium">LT705CE</p>
                  <p className="text-sm text-muted-foreground">Driver's license expired</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-500" />
                <div>
                  <p className="font-medium">CE123AB</p>
                  <p className="text-sm text-muted-foreground">Tax compliance pending</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Municipality Distribution</CardTitle>
            <CardDescription>Vehicles by municipality</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Douala</span>
                </div>
                <span className="font-medium">486</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Yaoundé</span>
                </div>
                <span className="font-medium">352</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Buea</span>
                </div>
                <span className="font-medium">187</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Limbe</span>
                </div>
                <span className="font-medium">123</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Bafoussam</span>
                </div>
                <span className="font-medium">100</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Vehicle Age Distribution</CardTitle>
            <CardDescription>Vehicles by age group</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">0-5 years</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-24 rounded-full bg-gray-100 dark:bg-gray-800">
                    <div className="h-full w-[15%] rounded-full bg-primary"></div>
                  </div>
                  <span className="text-sm">15%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">6-10 years</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-24 rounded-full bg-gray-100 dark:bg-gray-800">
                    <div className="h-full w-[25%] rounded-full bg-primary"></div>
                  </div>
                  <span className="text-sm">25%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">11-15 years</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-24 rounded-full bg-gray-100 dark:bg-gray-800">
                    <div className="h-full w-[35%] rounded-full bg-primary"></div>
                  </div>
                  <span className="text-sm">35%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">16-20 years</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-24 rounded-full bg-gray-100 dark:bg-gray-800">
                    <div className="h-full w-[20%] rounded-full bg-primary"></div>
                  </div>
                  <span className="text-sm">20%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">20+ years</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-24 rounded-full bg-gray-100 dark:bg-gray-800">
                    <div className="h-full w-[5%] rounded-full bg-primary"></div>
                  </div>
                  <span className="text-sm">5%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
