import notas from "../js/notas"
import { useState } from "react"


function AddNotas(){


    return(
        <div className="w-100 h-[calc(100vh-115px)] flex justify-start items-center p-3">
            <form action="" className="form-addNotas  w-full flex flex-col">
                <div>
                    <label htmlFor="titulo-nota" className="font-black">Titulo</label>  
                    <input id="titulo-nota" className="w-full" type="text" placeholder="Titulo"/>
                </div>
                <div>
                    <label htmlFor="textarea-nota" className="font-black">Contenido</label>
                    <textarea id="textarea-nota" className="textarea-addNotas" name=""  placeholder="Contenido"></textarea>
                </div>
                <button>subir</button>
            </form>
        </div>
    )

}

export default AddNotas