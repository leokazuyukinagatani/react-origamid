import { useRef } from 'react'
import { useState } from 'react'
import './App.css'
import {useLocalStorage} from './hooks/useLocalStorage'
function App() {
  const [produto, setProduto] = useLocalStorage('produto', '')
  const inputProduto = useRef();
  function handleSubmit() {
    setProduto(inputProduto.current.value)
  }
  return (
   <>
    <p>{produto}</p>
    <input ref={inputProduto}/>
    <button onClick={handleSubmit}>Enviar</button>
   </>
  )
}

export default App
