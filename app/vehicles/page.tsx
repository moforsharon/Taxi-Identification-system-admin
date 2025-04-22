import type { Metadata } from "next"
import VehiclesPage from "@/components/vehicles-page"
import Layout from "@/components/layout"

export const metadata: Metadata = {
  title: "Vehicles - Taxi Management System",
  description: "Manage all vehicles in the taxi system",
}

export default function Vehicles() {
  return (
    <Layout>
      <VehiclesPage />
    </Layout>
  )
}
