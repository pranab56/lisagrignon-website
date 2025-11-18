"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import { LucideChartSpline, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { PiBellBold } from "react-icons/pi";

import { GiMagnifyingGlass } from "react-icons/gi";

import { RiLogoutCircleRLine } from "react-icons/ri";
import provideIcon from '../../../../utils/provideIcon';
import { Button } from '../../ui/button';

type SidebarItem = {
  name: string;
  path: string;
  icon: React.ComponentType | string;
  hasSubmenu?: boolean;
  isCustomIcon?: boolean;
};

const sidebars: SidebarItem[] = [
  { name: "Dashboard", path: "/my-dashboard/user/dashboard", icon: LucideChartSpline },
  {
    name: "My Purchases",
    path: "/my-dashboard/user/my-purchases",
    icon: GiMagnifyingGlass,
  },
  {
    name: "My Donations",
    path: "/my-dashboard/user/my-donations",
    icon: FaUsers,
  },
  {
    name: "Notifications    ",
    path: "/my-dashboard/user/notifications",
    icon: PiBellBold,
    isCustomIcon: false,
  },

  { name: "My Profile", path: "/my-dashboard/user/my-profile", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <Sidebar>
      <SidebarContent className="bg-[#00705d] text-white">
        <SidebarGroup>
          <SidebarGroupLabel className="flex flex-col justify-center items-center my-7 ">
            <Image
              src="/icons/setting.png"
              alt="logo"
              width={200}
              height={200}
              className="w-1/2 h-16 object-contain mt-10"
            />

            <h1 className="text-bold text-white text-2xl mt-2">
              User Dashboard
            </h1>
          </SidebarGroupLabel>

          <SidebarGroupContent className="mt-16">
            <SidebarMenu>
              {sidebars.map((item) => (
                <SidebarMenuItem key={item.name}>
                  {item.hasSubmenu ? (
                    <>
                      <SidebarMenuButton
                        className={`w-full hover:bg-yellow-500 cursor-pointer active:bg-yellow-500 ${isActive(item.path) ? "bg-yellow-500" : ""
                          }`}
                      >
                        {item.isCustomIcon
                          ? provideIcon({ name: item.icon as string })
                          : React.createElement(
                            item.icon as React.ComponentType
                          )}
                        <span>{item.name}</span>
                      </SidebarMenuButton>
                    </>
                  ) : (
                    <SidebarMenuButton
                      asChild
                      className={`hover:bg-yellow-500 ${isActive(item.path) ? "bg-yellow-500" : ""
                        }`}
                    >
                      <Link href={item.path}>
                        {item.isCustomIcon
                          ? provideIcon({ name: item.icon as string })
                          : React.createElement(
                            item.icon as React.ComponentType
                          )}
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-[#00705d] text-white">
        <SidebarGroupLabel className="text-bold text-2xl mb-4">
          <Button className="w-full flex items-center gap-2 bg-yellow-500 hover:bg-amber-400">
            <RiLogoutCircleRLine />
            Logout
          </Button>
        </SidebarGroupLabel>
      </SidebarFooter>
    </Sidebar>
  );
}
