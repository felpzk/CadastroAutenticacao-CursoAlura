import { useState } from "react";

export function usePost() {
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState(false)

  async function cadastrarDados<T>({url, dados} : {url: string, dados: T}) {
    try {
      await fetch(`http:localhost:8080/${url}`, {
        method: 'POST',
        body: JSON.stringify(dados)
      })
      setSucesso(true)
    } 

    catch(erro) {
      setErro('Nao foi possivel enviar os dados')
    }
  }

  return { cadastrarDados, sucesso, erro }
}