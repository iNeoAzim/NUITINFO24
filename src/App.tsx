import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
       <Header />
       <Outlet />

     </main>
    </>
  )
}

export default App
