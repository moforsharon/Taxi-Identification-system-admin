"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BarChart3, Car, FileText, Home, Map, Settings, Users } from "lucide-react"
import { useSidebar } from "@/components/sidebar-provider"

const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    title: "Vehicles",
    href: "/vehicles",
    icon: Car,
  },
  // {
  //   title: "Drivers",
  //   href: "/drivers",
  //   icon: Users,
  // },
  {
    title: "Routes",
    href: "/routes",
    icon: Map,
  },
  // {
  //   title: "Reports",
  //   href: "/reports",
  //   icon: FileText,
  // },
  // {
  //   title: "Analytics",
  //   href: "/analytics",
  //   icon: BarChart3,
  // },
  // {
  //   title: "Settings",
  //   href: "/settings",
  //   icon: Settings,
  // },
]

export default function Sidebar() {
  const pathname = usePathname()
  const { isOpen, isMobile } = useSidebar()

  if (!isOpen && isMobile) {
    return null
  }

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-20 flex h-full w-64 flex-col border-r bg-background transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="flex h-16 items-center border-b px-6 bg-[#0E0E64]">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Car className="h-6 w-6 text-primary text-[#44D5FB]" />
          <span className="text-xl text-white">TaxiAdmin</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} passHref>
                <Button variant={pathname === item.href ? "secondary" : "ghost"} className={`w-full justify-start ${pathname === item.href ? "bg-[#BAAEFC] text-navy" : ""}`}>
                  <item.icon className="mr-2 h-5 w-5" />
                  {item.title}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* <div className="border-t p-4">
        <div className="rounded-lg bg-primary/10 p-4">
          <h5 className="mb-2 font-medium">Need Help?</h5>
          <p className="text-sm text-muted-foreground">Check our documentation or contact support for assistance.</p>
          <Button className="mt-3 w-full" size="sm">
            View Documentation
          </Button>
        </div>
      </div> */}
    </aside>
  )
}
