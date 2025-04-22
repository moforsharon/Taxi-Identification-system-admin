"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Car, CheckCircle, Edit2, FileText, MapPin, Shield, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface VehicleDetailsDialogProps {
  vehicle: any
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function VehicleDetailsDialog({ vehicle, open, onOpenChange }: VehicleDetailsDialogProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedDriver, setEditedDriver] = useState(vehicle.driver)
  const [selectedRoute, setSelectedRoute] = useState(vehicle.route)

  const handleSaveChanges = () => {
    // Here you would typically save changes to the backend
    setIsEditing(false)
  }

  const handleCancelEdit = () => {
    // Reset to original values
    setEditedDriver(vehicle.driver)
    setSelectedRoute(vehicle.route)
    setIsEditing(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Car className="h-5 w-5" />
            Vehicle Details - {vehicle.immatric}
          </DialogTitle>
          <DialogDescription>Complete information about the selected vehicle</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Card>
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="flex items-center justify-center bg-primary/10 rounded-full p-3 mb-2">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">{vehicle.make}</h3>
              <p className="text-sm text-muted-foreground">{vehicle.genreauto}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="flex items-center justify-center bg-primary/10 rounded-full p-3 mb-2">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">{vehicle.route}</h3>
              <p className="text-sm text-muted-foreground">{vehicle.municipality}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="flex items-center justify-center bg-primary/10 rounded-full p-3 mb-2">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Status</h3>
              <Badge variant="outline" className={`status-badge ${vehicle.status} mt-1`}>
                {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="col-span-3 md:col-span-1 flex flex-col items-center justify-center p-2 rounded-md bg-green-50 dark:bg-green-900/20">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="font-medium">Tax</span>
            </div>
            <span className="text-sm text-center">Tax compliant</span>
          </div>
          <div className="col-span-3 md:col-span-1 flex flex-col items-center justify-center p-2 rounded-md bg-green-50 dark:bg-green-900/20">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="font-medium">License</span>
            </div>
            <span className="text-sm text-center">License compliant</span>
          </div>
          <div className="col-span-3 md:col-span-1 flex flex-col items-center justify-center p-2 rounded-md bg-red-50 dark:bg-red-900/20">
            <div className="flex items-center gap-2 mb-2">
              <X className="h-5 w-5 text-red-500" />
              <span className="font-medium">Insurance</span>
            </div>
            <span className="text-sm text-center">Insurance expiring soon</span>
          </div>
        </div>

        <Tabs defaultValue="vehicle" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="vehicle">Vehicle Details</TabsTrigger>
            <TabsTrigger value="owner">Owner Details</TabsTrigger>
            <TabsTrigger value="driver">Driver Details</TabsTrigger>
          </TabsList>
          <TabsContent value="vehicle" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Immatriculation</Label>
                <Input value={vehicle.immatric} readOnly />
              </div>
              <div>
                <Label>Chassis Number</Label>
                <Input value={vehicle.chasis} readOnly />
              </div>
              <div>
                <Label>Make</Label>
                <Input value={vehicle.make} readOnly />
              </div>
              <div>
                <Label>Vehicle Age</Label>
                <Input value={`${vehicle.vehicleage} years`} readOnly />
              </div>
              <div>
                <Label>Horsepower</Label>
                <Input value={`${vehicle.horsepower} CV`} readOnly />
              </div>
              <div>
                <Label>Motor Type</Label>
                <Input value={vehicle.typemotor} readOnly />
              </div>
              <div>
                <Label>Registration Date</Label>
                <Input value={vehicle.datemec} readOnly />
              </div>
              <div>
                <Label>Number of Seats</Label>
                <Input value={vehicle.nombplac} readOnly />
              </div>
              <div>
                <Label>Vehicle Type</Label>
                <Input value={vehicle.genreauto} readOnly />
              </div>
              <div>
                <Label>Route</Label>
                {isEditing ? (
                  <Select value={selectedRoute} onValueChange={setSelectedRoute}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a route" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Route A">Route A</SelectItem>
                      <SelectItem value="Route B">Route B</SelectItem>
                      <SelectItem value="Route C">Route C</SelectItem>
                      <SelectItem value="Route D">Route D</SelectItem>
                      <SelectItem value="Route E">Route E</SelectItem>
                      <SelectItem value="Route F">Route F</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <Input value={vehicle.route} readOnly />
                )}
              </div>
            </div>
            <div className="border rounded-md p-4">
              <h3 className="font-medium flex items-center gap-2 mb-3">
                <Shield className="h-5 w-5 text-primary" />
                Insurance Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Company</Label>
                  <Input value={vehicle.insurance.company} readOnly />
                </div>
                <div>
                  <Label>Policy Number</Label>
                  <Input value={vehicle.insurance.policyNumber} readOnly />
                </div>
                <div>
                  <Label>Date Effect</Label>
                  <Input value={vehicle.insurance.dateEffect} readOnly />
                </div>
                <div>
                  <Label>Date Expiration</Label>
                  <Input value={vehicle.insurance.dateExpiration} readOnly />
                </div>
                <div>
                  <Label>Duration</Label>
                  <Input value={vehicle.insurance.duration} readOnly />
                </div>
                <div>
                  <Label>DTA Status</Label>
                  <Input value={vehicle.insurance.dtaPaid ? "Paid" : "Not Paid"} readOnly />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="owner" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Name</Label>
                <Input value={vehicle.owner.name} readOnly />
              </div>
              <div>
                <Label>CNI/RC Number</Label>
                <Input value={vehicle.owner.numero_cni_rc} readOnly />
              </div>
              <div>
                <Label>NIU</Label>
                <Input value={vehicle.owner.niu} readOnly />
              </div>
              <div>
                <Label>Raison Social</Label>
                <Input value={vehicle.owner.raisonsocial} readOnly />
              </div>
              <div>
                <Label>Sigle</Label>
                <Input value={vehicle.owner.sigle} readOnly />
              </div>
              <div>
                <Label>Activity</Label>
                <Input value={vehicle.owner.activite} readOnly />
              </div>
              <div>
                <Label>Tax Regime</Label>
                <Input value={vehicle.owner.regime_fiscal} readOnly />
              </div>
              <div>
                <Label>Tax Center</Label>
                <Input value={vehicle.owner.centre_impots} readOnly />
              </div>
              <div>
                <Label>Status</Label>
                <Input value={vehicle.owner.etat} readOnly />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="driver" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Name</Label>
                {isEditing ? (
                  <Input
                    value={editedDriver.name}
                    onChange={(e) => setEditedDriver({ ...editedDriver, name: e.target.value })}
                  />
                ) : (
                  <Input value={vehicle.driver.name} readOnly />
                )}
              </div>
              <div>
                <Label>Driver ID</Label>
                <Input value={vehicle.driver.id} readOnly />
              </div>
              <div>
                <Label>License Type</Label>
                {isEditing ? (
                  <Select
                    value={editedDriver.typepermis}
                    onValueChange={(value) => setEditedDriver({ ...editedDriver, typepermis: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select license type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A">A</SelectItem>
                      <SelectItem value="B">B</SelectItem>
                      <SelectItem value="C">C</SelectItem>
                      <SelectItem value="D">D</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <Input value={vehicle.driver.typepermis} readOnly />
                )}
              </div>
              <div>
                <Label>License Number</Label>
                {isEditing ? (
                  <Input
                    value={editedDriver.numeperm}
                    onChange={(e) => setEditedDriver({ ...editedDriver, numeperm: e.target.value })}
                  />
                ) : (
                  <Input value={vehicle.driver.numeperm} readOnly />
                )}
              </div>
              <div>
                <Label>Issue Date</Label>
                <Input value={vehicle.driver.datdelpermis} readOnly />
              </div>
              <div>
                <Label>Expiration Date</Label>
                <Input value={vehicle.driver.dateexpiration} readOnly />
              </div>
              <div>
                <Label>License Status</Label>
                <Input value={vehicle.driver.statutpermis} readOnly />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-2 mt-4">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={handleCancelEdit}>
                Cancel
              </Button>
              <Button onClick={handleSaveChanges}>Save Changes</Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)}>
              <Edit2 className="mr-2 h-4 w-4" />
              Edit Information
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
