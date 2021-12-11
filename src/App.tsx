import './App.css'
import { route } from './route/route.map'
import { useRoutes } from 'react-router-dom'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const elements = useRoutes(route)
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          {elements}
        </div>
      </div>

    </div>
  )
}

export default App
