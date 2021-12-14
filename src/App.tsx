import { route } from './route/route.map'
import { useRoutes } from 'react-router-dom'


function App() {
  
  const elements = useRoutes(route)
  return (
    <div className="App">
      {elements}
    </div>

  )
}

export default App;
