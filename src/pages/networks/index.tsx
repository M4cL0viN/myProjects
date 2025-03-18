import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { FormEvent, useEffect, useState } from "react";
import { db } from "../../services/firebaseConnection";
import { setDoc,doc,getDoc } from "firebase/firestore";

export function Networks() {
    const [instagram, setInstagram] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [youtube, setYoutube] = useState("");
    

    useEffect(() => {
        function loadLinks(){
            const docRef = doc(db, "social", "link")
            getDoc(docRef)
            .then((snapshot) => {
                if(snapshot.data() !== undefined){
                    setInstagram(snapshot.data()?.instagram);
                    setLinkedin(snapshot.data()?.linkedin);
                    setYoutube(snapshot.data()?.youtube);

                }
            })
        }

        loadLinks()
    },[])

    function handleRegister(e: FormEvent){
       e.preventDefault();

       setDoc(doc(db, "social", "link"), {
         instagram: instagram,
         linkedin: linkedin,
         youtube: youtube
       })
       .then(() => {
          console.log("Cadastrados com sucesso!")
       })
       .catch((error) => {
        console.log("Erro ao salvar!" + error)
       })
    }

    return (
        <div className="flex flex-col items-center min-h-screen pb-7 px-2">
            <Header />

            <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>

            <form onSubmit={handleRegister} className="flex flex-col max-w-xl w-full">
                <label className="mb-3 mt-2 text-white font-medium">Link do Instagram</label>
                <Input
                    type="url"
                    placeholder="Digite a url do instagram..."
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                />

                <label className="mb-3 mt-2 text-white font-medium">Link do Linkedin</label>
                <Input
                    type="url"
                    placeholder="Digite a url do linkedin..."
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                />

                <label className="mb-3 mt-2 text-white font-medium">Link do Youtube</label>
                <Input
                    type="url"
                    placeholder="Digite a url do youtube..."
                    value={youtube}
                    onChange={(e) => setYoutube(e.target.value)}
                />

                <button type="submit" className="cursor-pointer h-9 text-white bg-blue-600 rounded-md items-center justify-center flex bm-7 font-medium" >
                     Salvar links
                </button>
            </form>
        </div>
    )
}