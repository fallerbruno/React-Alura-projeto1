import React, { Children } from "react";
import style from './style.module.scss'

interface PropsBotao {
    texto: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
}

export function Botao ({onClick, type, texto} : PropsBotao){
    return (
        <button onClick={onClick} type={type} className={style.botao}>{texto}</button>
    )
}