import {Item} from './Item'
import style from  './style.module.scss'
import { TarefaProps } from '../../types/tarefa'

interface PropsItem {
    tarefas: TarefaProps[],
    selecionaTarefa: (tarefa : TarefaProps) => void, 
}

export function Lista( { tarefas, selecionaTarefa }: PropsItem )  {

    return (
        <aside className={style.listaTarefas}> 
            <h2> Estudos do Dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                  <Item 
                  selecionaTarefa={selecionaTarefa}
                  key={item.id}
                 {...item}
                  />
                ))}
            </ul>
        </aside>
    )
}