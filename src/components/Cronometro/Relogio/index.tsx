import style from './style.module.scss'
interface PropsRelogio {
    tempo: number | undefined;
}
export function Relogio({tempo = 0}: PropsRelogio) {
    const minutos = Math.floor(tempo/60);
    const segundos = tempo%60;

    const [minDezena, minUnidade] = String(minutos).padStart(2, '0');
    const [segDezena, segUnidade] = String(segundos).padStart(2, '0');
    
    return (
        <>
            <span className={style.relogioNumero}>{minDezena}</span>
            <span className={style.relogioNumero}>{minUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segDezena}</span>
            <span className={style.relogioNumero}>{segUnidade}</span>
        </>
    )
}