import { useEffect, useState } from "react";
import { PiHandsPrayingFill } from "react-icons/pi";

export default function Loading(){
    const [progressBarState, setProgressBarState] = useState(4)

    useEffect(() => {
        let counter = 0
        const progressBarInterval = setInterval(() => {
            if(counter >= 94){
                clearInterval(progressBarInterval)
            }
            setProgressBarState(prev => prev + 1)
            counter += 2
        }, 1000)
    }, [])

    return (
        <div className="load-container"> 
            <p className="title medium"><b>Iniciando o sistema...</b></p>

            <div className="progress-bar">
                <p className="counter" style={{color: progressBarState >= 48 ? 'white': 'rgb(49, 49, 49)'}}>{progressBarState}%</p>
                <progress className="progress" value={progressBarState} max={100}/>
            </div>

            <div className="message">
                <p className="text">
                    Nosso servidor estava em <span className="highlight">modo de economia</span> e está sendo ativado agora.
                    Isso pode levar alguns segundos na primeira vez.
                </p>

                <p className="text"><span className="highlight">Depois disso, tudo fica bem mais rápido!</span></p>

                <p className="text">Obrigado por aguardar! <PiHandsPrayingFill className="icon"/></p>
            </div>
        </div>
    )
}