"use client";

import { Home } from "lucide-react";
import Link from "next/link";

/*
this component is a simple link that navigates to the dashboard main page 
*/
interface TopItemProps {
  setOpen?: (open: boolean) => void;
}

const TopItem = ({ setOpen }: TopItemProps) => {
  const handleOpen = () => {
    if (setOpen) {
      setOpen(false);
    }
  };
  return (
    <Link
      href="/dashboard"
      onClick={handleOpen}
      className="flex h-9 w-9 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
    >
      <Home className="h-4 w-4 transition-all group-hover:scale-110" />
    </Link>
  );
};

export default TopItem;
