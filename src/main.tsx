import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/user'
import { AdminProvider } from './context/users'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <AdminProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AdminProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
