import './App.css'
import { useRoutes } from 'react-router-dom'
import { route } from './route/route.map'

const App = () => {
  const element = useRoutes(route);

  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
