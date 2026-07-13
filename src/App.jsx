import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddDonor from './components/AddDonor'
import ViewDonor from './components/ViewDonor'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<AddDonor/>}/>
        <Route path='/view' element={<ViewDonor/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
