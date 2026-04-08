import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { PiHandsPrayingFill } from "react-icons/pi";

export default function Loading({ loadingType = '0', progress }) {
    return (
        <div className="load-container">
            {loadingType === '1' ? 
                <>
                    <p className="title medium"><b>Iniciando o sistema...</b></p>
                    <div className="progress-bar">
                        <p className="counter" style={{color: progress && progress >= 48 ? 'white': 'rgb(49, 49, 49)'}}>{progress}%</p>
                        <progress className="progress" value={progress} max={100}/>
                    </div>
                </>
            :
                <div className="loading-icon">
                    <AiOutlineLoading3Quarters className="icon"/>
                </div>
            }

            <div className="message">
                {loadingType === '1' ?
                    <>
                        <p className="text">
                            Nosso servidor estava em <span className="highlight">modo de economia</span> e está sendo ativado agora.
                            Isso pode levar alguns segundos na primeira vez.
                        </p>

                        <p className="text"><span className="highlight">Depois disso, tudo fica bem mais rápido!</span></p>

                        <p className="text">Obrigado por aguardar! <PiHandsPrayingFill className="icon" /></p>
                    </>
                    :
                    <p className="text">Estamos carregando o conteúdo. <br/>Obrigado por aguardar!</p>
                }
            </div>
        </div>
    )
}