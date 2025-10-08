import './assets/sass/main.sass'

import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './services/route/routes'

function App() {

  return (
    <BrowserRouter>
      <RoutesApp/>
    </BrowserRouter>
  )
}

export default App
