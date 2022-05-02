import Link from "next/dist/client/link";
import styles from '../styles/Layout.module.css'

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{props.titulo ?? 'Mais um exemplo'}</h1>
                <Link href="/">Voltar</Link>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>
        </div>
    )
}

/* 
Isso ->  <Link href="/">Voltar</Link>

É a mesma coisa que isso:

 <Link href="/">
    <a>Voltar</a>
 </Link>

Explicando:  <h1>{props.titulo ?? 'Mais um exemplo'}</h1>

Em caso de não haver um título, o 'Mais um exemplo' será usado como título padrão.
*/