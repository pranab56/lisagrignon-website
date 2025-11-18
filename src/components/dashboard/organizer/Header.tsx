"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Badge } from '../../ui/badge';

export default function Header() {
  const router = useRouter();

  // Demo data
  const unreadCount = 5;
  const admin = {
    name: "John Doe",
    profile: "/demo-avatar.jpg"
  };

  const handleLogout = () => {
    console.log("Logging out...");
    // Add your logout logic here
  };

  return (
    <div className="w-full bg-sidebar border-b flex-shrink-0">
      <header className="flex h-20 w-full items-center px-4">
        <SidebarTrigger />

        <div className="ml-auto flex gap-2">
          <Button
            className="p-0 border bg-transparent h-10 hover:bg-white relative"
            onClick={() => {
              router.push("/my-dashboard/user/notifications");
            }}
          >
            <IoIosNotificationsOutline className="text-black" />
            {unreadCount > 0 && (
              <Badge
                className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute -top-2 -right-2"
                variant="destructive"
              >
                {unreadCount > 99 ? "99+" : unreadCount}
              </Badge>
            )}
          </Button>

          {/* Shadcn Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex h-10 w-[180px] items-center justify-between px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={admin?.profile} alt="Admin Avatar" />
                    <AvatarFallback>
                      {admin?.name
                        ? admin.name
                          .split(" ")
                          .map((n: string) => n[0])
                          .join("")
                          .toUpperCase()
                        : "U"}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">
                    {admin?.name.split(" ")[0] + " " + (admin?.name.split(" ")[1] || "")}
                  </span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[180px]" align="end">
              <DropdownMenuItem asChild>
                <Link href="/my-profile" className="cursor-pointer">
                  My Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/change-password" className="cursor-pointer">
                  Change Password
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-red-500 focus:text-red-500 cursor-pointer"
                onClick={handleLogout}
              >
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
}