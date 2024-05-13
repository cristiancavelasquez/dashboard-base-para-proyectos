"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { PanelLeft } from "lucide-react";
import React, { useState } from "react";
import Sidebar from "../_sidebar/Sidebar";

const SidebarOpener = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="md:hidden lg:hidden">
          <PanelLeft className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <Sidebar setOpen={setOpen}/>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarOpener;
