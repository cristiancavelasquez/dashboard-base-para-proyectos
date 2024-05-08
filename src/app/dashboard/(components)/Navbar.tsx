import React from 'react';
import {Input} from "@/components/ui/input";

function Navbar() {
    return (
        <nav className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Current Path</h2>
            <div className="flex gap-3 items-center">
                <Input placeholder="Search... optional" className="rounded-lg"/>
                <div className="bg-primary text-white rounded-full w-8 h-8"> LO</div>
            </div>
        </nav>
    );
}

export default Navbar;