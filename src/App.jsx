import { BrowserRouter} from 'react-router-dom'
import RoutesApp from './services/route/routes'
import './assets/sass/main.sass'

function App() {
  return (
    <BrowserRouter>
      <RoutesApp/>
    </BrowserRouter>
  )
}

export default App
