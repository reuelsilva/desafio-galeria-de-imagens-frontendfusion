import React from "react"

function Footer():JSX.Element{
    return(
        <footer className="bg-color-03 p-4">
            <div className="flex flex-col gap-2 w-full items-center">
                <h2 className="text-white font-medium text-sm">Banco de Imagens</h2>
                <p className="text-white text-xs font-normal">© 2024 Desenvolvedor Reuel Silva</p>
            </div>
        </footer>
    )
}

export default Footer