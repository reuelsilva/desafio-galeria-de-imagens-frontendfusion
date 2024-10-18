import React from "react";
import Navigation from "./Navigation";

export function Header(): JSX.Element {
    return (
        <header className='fixed top-0 lef-0 w-full z-10 flex flex-col items-center p-6 bg-color-01'>
            <div className="flex w-full mb-6">
                <a href="#" className="cursor-pointer"><img src="/logo.png" alt="Logo" /></a>
                <Navigation />
            </div>
            <p className="font-semibold sm:font-medium">Descubra suas imagens favoritas</p>
        </header>
    )
}

export default Header