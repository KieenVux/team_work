import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useRoutes } from 'react-router-dom'
import { route } from './route/route.map'

function App() {
  const element = useRoutes(route)

  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
