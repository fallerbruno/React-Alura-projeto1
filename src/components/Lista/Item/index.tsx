import { TarefaProps } from '../../../types/tarefa';
import style from  './style.module.scss';

interface PropsItem extends TarefaProps{
    selecionaTarefa: (tarefa : TarefaProps) => void, 
}


export function Item({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: PropsItem) {
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${completado ? style.itemCompletado : ""}`} 
        onClick={() => !completado && selecionaTarefa({
            tarefa,
            tempo, 
            selecionado, 
            completado, 
            id
        })}>
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
            {completado && <span className={style.concluido} aria-label="Tarefa-Compeltada"></span> }
        </li>
    )
}