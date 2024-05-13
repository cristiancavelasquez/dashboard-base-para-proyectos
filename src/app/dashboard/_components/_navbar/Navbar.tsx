import React from "react";
import { Input } from "@/components/ui/input";
import { PathBreadCrumb } from "./PathBreadCrumb";
import AvatarNavbar from "./AvatarNavbar";
import SidebarOpener from "./SidebarOpener";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-background border-b border-border py-2 px-3 md:bg-inherit lg:bg-inherit md:border-none lg:">
      <PathBreadCrumb />
      <SidebarOpener />
      <AvatarNavbar />
    </nav>
  );
}

export default Navbar;
