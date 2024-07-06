import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Login from './pages/Login'


function App() {
  

  return (
    <Login>
      <Layout className="Layout"></Layout>
    </Login>
  )
}

export default App;
