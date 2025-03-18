import { Link } from "react-router-dom";

export function ErrorPage(){
    return(
        <div className="flex items-center min-h-screen justify-center flex-col w-full text-white">
            <h1 className="font-bold text-6xl mb-2 ">404</h1>
            <h1 className="font-bold text-4xl mb-4 ">Pagina não encontrada</h1>
            <p className="italic text-1xl mb-4">Voce caiu em uma pagina que não existe</p>

            <Link className="bg-gray-50/20 py-1 px-4 rounded-md" to="/">
               Voltar para home
            </Link>
        </div>
    )
}