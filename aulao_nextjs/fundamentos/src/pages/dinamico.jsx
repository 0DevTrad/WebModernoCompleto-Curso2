import { useState } from "react";
import Layout from "../components/Layout";

function GetServerSideProps() {
    
    const [codigo, setCodigo] = useState({})

    async function obterCodigo() {
        const res = await fetch('http://localhost:3000/api/randomico')
        const dados = await res.json()
        setCodigo(dados)
    }

    return (
        <Layout titulo='Conteúdo Dinâmico'>
            Codigo da API: {codigo.codigo} 
            <br/>
            <br/>
            <button onClick={obterCodigo}>Obter codigo da API</button>
        </Layout>
    )
}

export default GetServerSideProps;