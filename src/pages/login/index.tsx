import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/input";
import { FormEvent, useState } from "react";

import {auth} from '../../services/firebaseConnection'
import { signInWithEmailAndPassword} from "firebase/auth";

export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


     function handleSubmit(e: FormEvent){
        e.preventDefault();

        if(email === '' || password === ''){
            alert("Preencha todos os campos!")
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigate("/admin", { replace: true})
            console.log("Logado com sucesso!")
        })
        .catch((error) => {
            console.log("Erro ao fazer login!")
            console.log(error)
        })
     }
        
     

    return (
        <div className="flex w-full h-screen items-center justify-center flex-col">
            <Link to="/">
                <h1 className="mt-11 text-white mb-7 font-bold text-5xl">Dev
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">Link</span>
                </h1>
            </Link>

            <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-2">
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu email..."
                />

                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha..."
                />

                <button type="submit" className="h-9 bg-blue-600 rounded-md border-0 text-lg font-medium cursor-pointer hover:text-white">
                    Acessar
                </button>
            </form>
        </div>
    )
}