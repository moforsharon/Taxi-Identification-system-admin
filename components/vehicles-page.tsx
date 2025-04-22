"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Download, Filter, Plus, Search, SlidersHorizontal } from "lucide-react"
import { VehicleDetailsDialog } from "@/components/vehicle-details-dialog"

// Sample data
const vehicles = [
  {
    id: "1",
    immatric: "CE705LU",
    chasis: "JTDKV183303273771",
    make: "TOYOTA",
    vehicleage: 23,
    horsepower: 6,
    typemotor: "E",
    datemec: "2001-06-09",
    nombplac: 5,
    genreauto: "Taxi de ville",
    owner: {
      name: "KAMGA TABUE LEONNEL GIRESSE",
      numero_cni_rc: "LT08255I5IWQCAE6P4T6",
      niu: "P019417305631N",
      raisonsocial: "KAMGA TABUE",
      sigle: "LEONNEL GIRESSE",
      activite: "VENDEUR",
      regime_fiscal: "IMPÔT GÉNÉRAL SYNTHÉTIQUE",
      centre_impots: "CDI DOUALA 3",
      etat: "Inactif",
    },
    driver: {
      id: "e128bab5-44aa-4f28-9dd3-17785c568940",
      name: "TOMAGAM MARTIN DESIRE",
      typepermis: "B",
      numeperm: "OU-110414-10",
      datdelpermis: "2016-05-06",
      dateexpiration: "2026-05-06",
      statutpermis: "Valide",
    },
    insurance: {
      company: "Garantie Mutuelle Des Cadres S.A.",
      dateEffect: "2024-06-10",
      dateExpiration: "2024-09-09",
      duration: "3M",
      policyNumber: "4000001538",
      dateEmission: "2024-06-10",
      dtaPaid: false,
      dtaValidity: "2024-09-09",
    },
    route: "Route A",
    status: "active",
    municipality: "Douala",
  },
  {
    id: "2",
    immatric: "CE508NO",
    chasis: "SB164ZEB10E062506",
    make: "TOYOTA",
    vehicleage: 15,
    horsepower: 8,
    typemotor: "E",
    datemec: "2009-03-15",
    nombplac: 5,
    genreauto: "Taxi de ville",
    owner: {
      name: "DIVINE TAKUBANDE",
      numero_cni_rc: "DT12345I5IWQCAE6P4T6",
      niu: "P019417305632N",
      raisonsocial: "TAKUBANDE",
      sigle: "DIVINE",
      activite: "COMMERÇANT",
      regime_fiscal: "IMPÔT GÉNÉRAL SYNTHÉTIQUE",
      centre_impots: "CDI YAOUNDE 2",
      etat: "Actif",
    },
    driver: {
      id: "f238bab5-44aa-4f28-9dd3-17785c568941",
      name: "JEAN PIERRE KAMDEM",
      typepermis: "B",
      numeperm: "YA-220515-12",
      datdelpermis: "2018-07-12",
      dateexpiration: "2028-07-12",
      statutpermis: "Valide",
    },
    insurance: {
      company: "Garantie Mutuelle Des Cadres S.A.",
      dateEffect: "2024-06-10",
      dateExpiration: "2024-09-09",
      duration: "3M",
      policyNumber: "4000001538",
      dateEmission: "2024-06-10",
      dtaPaid: false,
      dtaValidity: "2024-09-09",
    },
    route: "Route C",
    status: "active",
    municipality: "Yaoundé",
  },
  {
    id: "3",
    immatric: "LT705CE",
    chasis: "HGFD12345678901234",
    make: "HONDA",
    vehicleage: 10,
    horsepower: 7,
    typemotor: "E",
    datemec: "2014-11-22",
    nombplac: 5,
    genreauto: "Taxi de ville",
    owner: {
      name: "MBARGA JOSEPH",
      numero_cni_rc: "MJ67890I5IWQCAE6P4T6",
      niu: "P019417305633N",
      raisonsocial: "MBARGA",
      sigle: "JOSEPH",
      activite: "CHAUFFEUR",
      regime_fiscal: "IMPÔT GÉNÉRAL SYNTHÉTIQUE",
      centre_impots: "CDI BUEA 1",
      etat: "Actif",
    },
    driver: {
      id: "g348bab5-44aa-4f28-9dd3-17785c568942",
      name: "MBARGA JOSEPH",
      typepermis: "B",
      numeperm: "BU-330616-15",
      datdelpermis: "2020-01-30",
      dateexpiration: "2020-01-30",
      statutpermis: "Expiré",
    },
    insurance: {
      company: "AXA Assurances",
      dateEffect: "2023-12-15",
      dateExpiration: "2024-03-15",
      duration: "3M",
      policyNumber: "5000002345",
      dateEmission: "2023-12-15",
      dtaPaid: true,
      dtaValidity: "2024-03-15",
    },
    route: "Route B",
    status: "inactive",
    municipality: "Buea",
  },
  {
    id: "4",
    immatric: "CE123AB",
    chasis: "ABCD98765432109876",
    make: "NISSAN",
    vehicleage: 12,
    horsepower: 8,
    typemotor: "E",
    datemec: "2012-05-18",
    nombplac: 5,
    genreauto: "Taxi de ville",
    owner: {
      name: "NKENG MARIE",
      numero_cni_rc: "NM54321I5IWQCAE6P4T6",
      niu: "P019417305634N",
      raisonsocial: "NKENG",
      sigle: "MARIE",
      activite: "COMMERÇANT",
      regime_fiscal: "IMPÔT GÉNÉRAL SYNTHÉTIQUE",
      centre_impots: "CDI LIMBE 1",
      etat: "Actif",
    },
    driver: {
      id: "h458bab5-44aa-4f28-9dd3-17785c568943",
      name: "TABI EMMANUEL",
      typepermis: "B",
      numeperm: "LI-440717-18",
      datdelpermis: "2022-03-10",
      dateexpiration: "2032-03-10",
      statutpermis: "Valide",
    },
    insurance: {
      company: "SAAR Assurances",
      dateEffect: "2024-01-20",
      dateExpiration: "2024-07-20",
      duration: "6M",
      policyNumber: "6000003456",
      dateEmission: "2024-01-20",
      dtaPaid: true,
      dtaValidity: "2024-07-20",
    },
    route: "Route D",
    status: "pending",
    municipality: "Limbe",
  },
  {
    id: "5",
    immatric: "BA456CD",
    chasis: "EFGH12345678901234",
    make: "HYUNDAI",
    vehicleage: 8,
    horsepower: 9,
    typemotor: "E",
    datemec: "2016-08-30",
    nombplac: 5,
    genreauto: "Taxi de ville",
    owner: {
      name: "TALLA PIERRE",
      numero_cni_rc: "TP13579I5IWQCAE6P4T6",
      niu: "P019417305635N",
      raisonsocial: "TALLA",
      sigle: "PIERRE",
      activite: "ENTREPRENEUR",
      regime_fiscal: "IMPÔT GÉNÉRAL SYNTHÉTIQUE",
      centre_impots: "CDI BAFOUSSAM 2",
      etat: "Actif",
    },
    driver: {
      id: "i568bab5-44aa-4f28-9dd3-17785c568944",
      name: "KAMGA ERIC",
      typepermis: "B",
      numeperm: "BA-550818-20",
      datdelpermis: "2019-05-15",
      dateexpiration: "2029-05-15",
      statutpermis: "Valide",
    },
    insurance: {
      company: "Chanas Assurances",
      dateEffect: "2024-02-10",
      dateExpiration: "2024-08-10",
      duration: "6M",
      policyNumber: "7000004567",
      dateEmission: "2024-02-10",
      dtaPaid: true,
      dtaValidity: "2024-08-10",
    },
    route: "Route E",
    status: "active",
    municipality: "Bafoussam",
  },
  {
    id: "6",
    immatric: "YA789EF",
    chasis: "IJKL12345678901234",
    make: "KIA",
    vehicleage: 5,
    horsepower: 10,
    typemotor: "E",
    datemec: "2019-04-12",
    nombplac: 5,
    genreauto: "Taxi de ville",
    owner: {
      name: "FOUDA CLAIRE",
      numero_cni_rc: "FC24680I5IWQCAE6P4T6",
      niu: "P019417305636N",
      raisonsocial: "FOUDA",
      sigle: "CLAIRE",
      activite: "COMMERÇANT",
      regime_fiscal: "IMPÔT GÉNÉRAL SYNTHÉTIQUE",
      centre_impots: "CDI YAOUNDE 3",
      etat: "Actif",
    },
    driver: {
      id: "j678bab5-44aa-4f28-9dd3-17785c568945",
      name: "ATANGANA PAUL",
      typepermis: "B",
      numeperm: "YA-660919-22",
      datdelpermis: "2021-09-20",
      dateexpiration: "2031-09-20",
      statutpermis: "Valide",
    },
    insurance: {
      company: "Zenithe Insurance",
      dateEffect: "2024-03-15",
      dateExpiration: "2024-09-15",
      duration: "6M",
      policyNumber: "8000005678",
      dateEmission: "2024-03-15",
      dtaPaid: true,
      dtaValidity: "2024-09-15",
    },
    route: "Route A",
    status: "active",
    municipality: "Yaoundé",
  },
]

export default function VehiclesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.immatric.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.owner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.chasis.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.route.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleViewDetails = (vehicle: any) => {
    setSelectedVehicle(vehicle)
    setIsDialogOpen(true)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Vehicles</h1>
          <p className="text-muted-foreground">Manage and monitor all registered vehicles in the system</p>
        </div>
        <Button className="w-full md:w-auto bg-[#0E0E64]">
          <Plus className="mr-2 h-4 w-4" />
          Add Vehicle
        </Button>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by immatric, make, owner, driver..."
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
              <DropdownMenuItem>All Vehicles</DropdownMenuItem>
              <DropdownMenuItem>Active Vehicles</DropdownMenuItem>
              <DropdownMenuItem>Inactive Vehicles</DropdownMenuItem>
              <DropdownMenuItem>Pending Approval</DropdownMenuItem>
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
                  <TableHead>Immatric</TableHead>
                  <TableHead>Make</TableHead>
                  <TableHead className="hidden md:table-cell">Owner</TableHead>
                  <TableHead className="hidden md:table-cell">Driver</TableHead>
                  <TableHead className="hidden md:table-cell">Chassis</TableHead>
                  <TableHead>Route</TableHead>
                  {/* <TableHead>Status</TableHead> */}
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVehicles.map((vehicle) => (
                  <TableRow key={vehicle.id}>
                    <TableCell className="font-medium">{vehicle.immatric}</TableCell>
                    <TableCell>{vehicle.make}</TableCell>
                    <TableCell className="hidden md:table-cell">{vehicle.owner.name}</TableCell>
                    <TableCell className="hidden md:table-cell">{vehicle.driver.name}</TableCell>
                    <TableCell className="hidden md:table-cell">{vehicle.chasis}</TableCell>
                    <TableCell>{vehicle.route}</TableCell>
                    {/* <TableCell>
                      <Badge variant="outline" className={`status-badge ${vehicle.status}`}>
                        {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
                      </Badge>
                    </TableCell> */}
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => handleViewDetails(vehicle)} className="hover:bg-[#44D5FB]">
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

      {selectedVehicle && (
        <VehicleDetailsDialog vehicle={selectedVehicle} open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      )}
    </div>
  )
}
