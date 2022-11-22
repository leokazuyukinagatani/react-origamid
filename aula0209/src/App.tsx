

function App() {
  
  function handleClick(event:React.MouseEvent<HTMLButtonElement>) {
    console.log(event.currentTarget.innerText)
  }

  return (
    <button onClick={handleClick}>dsadasda</button>
  )
}

export default App
