import { useState } from 'react'
import './css/custom.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Notas from './components/Notas'

function App() {

  return (
    <div className="App">
      <Formulario />
      <Notas />
    </div>
  )
}

export default App
