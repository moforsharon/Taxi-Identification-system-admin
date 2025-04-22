import type { Metadata } from "next"
import DriversPage from "@/components/drivers-page"
import Layout from "@/components/layout"

export const metadata: Metadata = {
  title: "Drivers - Taxi Management System",
  description: "Manage all drivers in the taxi system",
}

export default function Drivers() {
  return (
    <Layout>
      <DriversPage />
    </Layout>
  )
}
