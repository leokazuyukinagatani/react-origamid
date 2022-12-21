import { useState } from 'react'
import { DogSvg } from './DogSVg'
import { Slide } from './Slide'

function App() {

  const slides = [{
    id: 'slide1',
    text: 'Slide 1'
  },
  {
    id: 'slide2',
    text: 'Slide 2'
  },
  {
    id: 'slide3',
    text: 'Slide 3'
  },
  {
    id: 'slide4',
    text: 'Slide 4'
  },
]

  const [olho, setOlho] = useState(5)

  function handleMouseEnter() {
    for (let index = 0; index < 6; index++) {
      setTimeout(() => {
        setOlho(index)
      }, 100*index)
      
    }
  }

  return (
    <div >
      <DogSvg color='#e21' olho={olho} onMouseEnter={handleMouseEnter}/>
      <Slide slides={ slides }/>
    </div>
    )
}

export default App
