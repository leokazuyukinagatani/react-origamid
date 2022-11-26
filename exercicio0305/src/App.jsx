import { useState } from 'react'
import './App.css'
import { ButtonLimpar } from './ButtonLimpar'
import { GlobalStorage } from './GlobalContext'
import { Produto } from './Produto'

function App() {

  return (
    <GlobalStorage>
      <Produto/>
      <ButtonLimpar/>
    </GlobalStorage>
    
  )
}

export default App
