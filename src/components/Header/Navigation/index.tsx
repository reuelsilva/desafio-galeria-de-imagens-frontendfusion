import React from "react";
import NavItem from "./NavItem";
import { FilterType } from "../../../types/filter-types";


function Navigation():JSX.Element {
    return (
        <nav className='mx-auto'>
            <ul className='flex gap-4'>
                <NavItem type={FilterType.HOME}>Home</NavItem>
                <NavItem type={FilterType.FAVORITES}>Favoritos</NavItem>
            </ul>
        </nav>
    )
}

export default Navigation;