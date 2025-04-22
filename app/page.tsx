import type { Metadata } from "next"
import Dashboard from "@/components/dashboard"
import Layout from "@/components/layout"

export const metadata: Metadata = {
  title: "Dashboard - Taxi Management System",
  description: "Dashboard for city council taxi management",
}

export default function Home() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  )
}
