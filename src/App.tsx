import { route, route2 } from './route/route.map'
import { useRoutes } from 'react-router-dom'
// import './Style/App.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  const elements = useRoutes(route)
  return (
    <div className="App">
      {elements}
    </div>

  )
}
import newHome from './pages/newHome';

export default App
