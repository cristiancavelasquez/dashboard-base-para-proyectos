"use client";
import { Book, User } from "lucide-react";
import SidebarItem from "./SidebarItem";
import TopItem from "./TopItem";

/*
Put as many sidebar items as you want here.
*/

interface SidebarProps {
  setOpen?: (open: boolean) => void;
}

function Sidebar({ setOpen }: SidebarProps) {
  return (
    <aside className="lg:w-14 md:w-14">
      <nav className="flex flex-col items-start lg:items-center md:items-center gap-4 md:py-4 lg:px-2 lg:py-4">
        <TopItem setOpen={setOpen} />
        <SidebarItem
          setOpen={setOpen}
          tooltip="Users"
          path="/dashboard/users"
          icon={<User className="h-5 w-5 flex" />}
        />
        <SidebarItem
          setOpen={setOpen}
          tooltip="Posts"
          path="/dashboard/posts"
          icon={<Book className="h-5 w-5" />}
        />
      </nav>
    </aside>
  );
}

export default Sidebar;
