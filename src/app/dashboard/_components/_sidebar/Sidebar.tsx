"use client";
import { Book, User } from "lucide-react";
import SidebarItem from "./SidebarItem";
import TopItem from "./TopItem";
import { adminMenu } from "./AdminMenu";
import { userMenu } from "./UserMenu";

interface SidebarProps {
  setOpen?: (open: boolean) => void;
}

function Sidebar({ setOpen }: SidebarProps) {
  return (
    <aside className="lg:w-14 md:w-14">
      <nav className="flex flex-col items-start lg:items-center md:items-center gap-4 md:py-4 lg:px-2 lg:py-4">
        <TopItem setOpen={setOpen} />
        {
          // If user is admin, show admin menu
          // Otherwise, show user menu
          // You can add more menus here
          true
            ? adminMenu.map((item) => (
                <SidebarItem key={item.tooltip} setOpen={setOpen} {...item} />
              ))
            : userMenu.map((item) => (
                <SidebarItem key={item.tooltip} setOpen={setOpen} {...item} />
              ))
        }
      </nav>
    </aside>
  );
}

export default Sidebar;
