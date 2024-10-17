import React, { createContext, useState } from "react";

interface ContextProps{
    page: number, 
    setPage: React.Dispatch<React.SetStateAction<number>>,
}

type ContextProviderProps = {
    children: React.ReactNode;
};

export const Context = createContext<ContextProps>({
    page: 0, 
    setPage: () => {}, 
});

function ContextProvider({children}: ContextProviderProps){
    const [page, setPage] = useState<number>(1);


    return(
        <Context.Provider value={{page, setPage}}>
            {children}
        </Context.Provider>   
    )
}

export default ContextProvider;