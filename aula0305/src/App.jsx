import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Usercontext } from './UserContext'
import { Produto } from './Produto'
import { GlobalStorage} from './GlobalContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  )
}

export default App
