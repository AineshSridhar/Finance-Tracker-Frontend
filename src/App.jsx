  import { useState } from 'react'
  import {Route, Routes} from 'react-router-dom'
  import './App.css'
  import Navbar from './components/Navbar'
  import Dashboard from './pages/Dashboard'
  import Expenditures from './pages/Expenditures'

  function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
      <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen = {setSidebarOpen}/>
      <Routes>
        <Route path = "/" element = {<Dashboard sidebarOpen={sidebarOpen} />} />
        <Route path = "/expenditures" element = {<Expenditures />} />
      </Routes>
      </>
    )
  }

  export default App
