import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { TarefaProps } from "../../types/tarefa";
import { Botao } from "../Botao";
import { Relogio } from "./Relogio";
import style from './style.module.scss'

interface PropsCronometro {
    selecionado: TarefaProps | undefined
    finalizarTarefa: () => void
}


export function Cronometro({ selecionado, finalizarTarefa }: PropsCronometro) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado]);

    function regresiva(contador: number = 0) {
        setTimeout(() => {
            console.log(contador);

            if (contador > 0) {
                setTempo(contador - 1);
                return regresiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }


    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => regresiva(tempo)} texto="Começar" />
        </div>
    )
}