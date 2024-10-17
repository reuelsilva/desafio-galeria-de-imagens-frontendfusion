import React, { Dispatch, useState } from "react";
import { createContext } from "react";
import { FilterType } from "../types/filter-types";

type NavigationProviderProps = {
    children: React.ReactNode,
}

interface ContextProps{
    navFilter: FilterType,
    setNavFilter: Dispatch<React.SetStateAction<FilterType>>
}

export const filterContext = createContext<ContextProps>({
    navFilter: FilterType.HOME, 
    setNavFilter: () => {}
});

function NavigationProvider({children}: NavigationProviderProps){

    const [navFilter, setNavFilter] = useState<FilterType>(FilterType.HOME);

    return(
        <filterContext.Provider value={{navFilter, setNavFilter}}>
            {children}
        </filterContext.Provider>
    )
}

export default NavigationProvider;