import './css/custom.css'
import ListadoNotas from './components/Notas/ListadoNotas'
import GuardarNota from './components/Notas/GuardarNota'

function App() {

  return (
    <div className="App">
      <GuardarNota />
      <ListadoNotas />
    </div>
  )
}

export default App
