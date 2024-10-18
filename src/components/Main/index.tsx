import React, { useContext } from "react";
import HomeView from "./HomeView";
import { filterContext } from "../../contexts/navigation-context";
import { FilterType } from "../../types/filter-types";
import FavoritesView from "./FavoritesView";

function Main():JSX.Element{
    const {navFilter} = useContext(filterContext)
    
    return(
        <main className="min-h-screen mt-32 mb-[52px] p-3">
            {
                navFilter==FilterType.HOME && (
                    <HomeView/>
                )
            }
            {
                navFilter==FilterType.FAVORITES && (
                    <FavoritesView/>
                )
            }
        
        </main>
    )
}

export default Main