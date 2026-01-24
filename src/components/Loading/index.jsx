import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading(){
    return (
        <div className="load-container"> 
            <AiOutlineLoading3Quarters className="icon loading"/>
            <p className="text small">Carregando produtos...</p>
        </div>
    )
}