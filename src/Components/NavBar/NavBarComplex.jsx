import { Bars2Icon } from "@heroicons/react/24/outline";
import { Collapse, IconButton, Navbar } from "@material-tailwind/react";
import ProfileMenu from "./profileMenu";
import NavList from "./NavList";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function ComplexNavbar() {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const navigate = useNavigate()

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);
    const handleToGoHome = () => {
        navigate('/')
    }

    return (
        <Navbar className="justify-items-center mx-auto max-w-screen-xl h-[100px] border-4 border-sky-500 p-2 lg:rounded-full lg:pl-6 drop-shadow-xl">
            <div className="relative mx-auto flex items-center text-blue-gray-900 justify-between h-3/4 bottom-0">
                <p
                    className="flex cursor-pointer font-medium bottom-0 translate-y-3" onClick={handleToGoHome}
                >
                    Shopping
                </p>
                <div className="absolute top-3/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block  items-center">
                    <NavList />
                </div>
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden"
                >
                    <Bars2Icon className="h-6 w-6" />
                </IconButton>
                <div className="translate-y-3">
                    <ProfileMenu />
                </div>
            </div>
            <Collapse open={isNavOpen} className="overflow-scroll">
                <NavList />
            </Collapse>
        </Navbar>
    );
}