import React from 'react';
import {Home, Package2} from "lucide-react";
import Link from "next/link";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

function Sidebar() {
    return (
        <aside className="bg-background border-r border-border borde w-14">
            <nav className="flex flex-col items-center gap-4 px-2 py-4">
                <Link
                    href="/"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Package2 className="h-4 w-4 transition-all group-hover:scale-110"/>
                </Link>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Home className="h-5 w-5"/>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="bg-primary text-secondary">Dashboard</TooltipContent>
                    </Tooltip>
                </ TooltipProvider>
               
            </nav>
        </aside>
    );
}

export default Sidebar;