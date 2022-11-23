import { useState } from "react"

export function ButtonFetch({url, title}) {

  const[loading, setLoading] = useState(false)
  async function fetchData() {
    setLoading(true)
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
    setData(json)
    setLoading(false)
  }

  return(
    <>
      <button disabled={loading} onClick={() => fetchData()}>{
      !loading ? `Carregar: ${title}` : 'Carregando'
    }</button>
    <p>
      Nome:{' '}
      {data.nome}
    </p>
    <p>
      Preco:{' '}
      {data.preco}
    </p>
    <p>
      Descricao:{' '}
      {data.descricao}
    </p>
    <p>
      Status:{' '}
      {
        data.vendido==='true' ? 'Vendido' : 'Disponivel'
      }
    </p>
    </>
  )
}