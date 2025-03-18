import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}

export function Input(props: InputProps){
    return(
        <input
           className="bg-white text-black border-0 h-9 outline-none px-2 mb-2 rounded-md"
           {...props}
        />
    )
}