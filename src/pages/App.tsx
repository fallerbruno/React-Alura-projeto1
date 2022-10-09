import { useState } from 'react'
import { Cronometro } from '../components/Cronometro';
import { Formulario } from '../components/Formulario'
import { Lista } from '../components/Lista'
import { TarefaProps } from '../types/tarefa';
import style from './style.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<TarefaProps[] | []>([]);
  const [selecionado, setSelecionado] = useState<TarefaProps>();

  function selecionaTarefa(tarefaSelecionada: TarefaProps) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAntigas => tarefasAntigas.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
    })));
  }

  function finalizarTarefa() {
    if (selecionado) {
      setTarefas(tarefasAntigas => tarefasAntigas.map(tarefa => {
        setSelecionado(undefined);
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true,
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>

  )
}

export default App
