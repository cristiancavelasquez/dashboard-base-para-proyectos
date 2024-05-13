"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import clsx from "clsx";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarItemProps {
  path: string;
  icon: React.ReactNode;
  tooltip: string;
  setOpen?: (open: boolean) => void;
}

const SidebarItem = ({ path, icon, tooltip, setOpen }: SidebarItemProps) => {
  const pathname = usePathname();
  const handleOpen = () => {
    if (setOpen) {
      setOpen(false);
    }
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={path}
            onClick={handleOpen}
            className={clsx(
              "flex font-semibold h-9 gap-3 md:w-9 lg:w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8",
              pathname.includes(path)
                ? "text-accent-foreground"
                : "text-muted-foreground",
              pathname.includes(path) && "md:bg-accent lg:bg-accent"
            )}
          >
            <div className="w-9 h-9 flex justify-center items-center">
              {icon}
            </div>
            <span className="md:hidden lg:hidden">{tooltip}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right" className="bg-primary text-secondary">
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SidebarItem;
