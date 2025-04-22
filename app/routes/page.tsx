import type { Metadata } from "next"
import RoutesPage from "@/components/routes-page"
import Layout from "@/components/layout"

export const metadata: Metadata = {
  title: "Routes - Taxi Management System",
  description: "Manage taxi routes in the system",
}

export default function Routes() {
  return (
    <Layout>
      <RoutesPage />
    </Layout>
  )
}
