import { useState } from 'react'

import './App.css'
import CCColors from './CComp/CCColors'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CCColors></CCColors>
    </>
  )
}

export default App
