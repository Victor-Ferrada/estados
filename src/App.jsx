import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0) 
  //variable del estado es count 
  //setCount es decir count=count+1 una funcion o metodo
  //se necesita el nombre del estado y la funcion que modifica el estado
  const [suma, setsuma] = useState(true);

  const incrementa = () => {
    if (count === 9) {
      setsuma(false);
    } else if (count === 1) {
      setsuma(true);
    }

    if (suma) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Contador: {count}</h1>
      <button onClick={incrementa}>Aumentar valor</button>
    </>
  )
}

export default App
