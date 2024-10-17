import React, { useContext } from "react";
import { filterContext } from "../../../../contexts/navigation-context";
import { FilterType } from "../../../../types/filter-types";

type NavItemProps = {
    children: string,
    type: FilterType
}

function NavItem({children, type}: NavItemProps):JSX.Element{
    const {navFilter, setNavFilter} = useContext(filterContext)
    return(
        <li className={navFilter == type?"text-color-02 font-semibold border-b-4 border-solid border-color-02 cursor-pointer":"text-color-02 cursor-pointer"} onClick={() => setNavFilter(type)}>{children}</li>
    )
}

export default NavItem;