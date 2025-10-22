import { useState } from 'react'

import './App.css'
import Texts from "./components/Texts"
import Filmroll from "./components/Filmroll"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Texts text="Hey"></Texts>
      <div>
        <h3>Привіт!</h3>
        <p className=''>Я тут, щоб зробити для тебе знімки, які передадуть не лише твою неймовірну красу, а й твою особистість </p>
      </div>
      <Filmroll></Filmroll>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  )
}

export default App
