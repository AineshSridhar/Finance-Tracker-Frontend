  import { useState } from 'react'
  import {Route, Routes} from 'react-router-dom'
  import './App.css'
  import Dashboard from './pages/Dashboard'
  import Expenditures from './pages/Expenditures'
  import Budget from './pages/Budget'
  import Layout from './components/Layout'
  import Goals from './pages/Goals'

  function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
      <Routes>
        <Route path = "/" element = {
          <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
            <Dashboard />
          </Layout>
        } />
        <Route path = "/expenditures" element = {
          <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
            <Expenditures />
          </Layout>
        } />
        <Route path = "/budget" element = {
          <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
            <Budget />
          </Layout>
        } />
        <Route path = "/goals" element = {
          <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
            <Goals/>
          </Layout>
        }/>
      </Routes>
    );
  }

  export default App
