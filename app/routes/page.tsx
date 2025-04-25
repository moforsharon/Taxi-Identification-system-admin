import type { Metadata } from "next"
import RoutesPage from "@/components/routes-page"
import Layout from "@/components/layout"

export const metadata: Metadata = {
  title: "Yaoundé Routes - Taxi Management System",
  description: "Manage taxi routes in Yaoundé municipality",
}

export default function Routes() {
  return (
    <Layout>
      <RoutesPage />
    </Layout>
  )
}
