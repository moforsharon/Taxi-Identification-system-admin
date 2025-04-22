"use client"

import type React from "react"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import { useSidebar } from "@/components/sidebar-provider"

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isOpen, isMobile } = useSidebar()

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div
        className={`flex flex-col flex-1 overflow-hidden ${isOpen && !isMobile ? "ml-64" : "ml-0"} transition-all duration-300`}
      >
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50 dark:bg-gray-900">{children}</main>
      </div>
    </div>
  )
}
