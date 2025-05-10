import React from 'react'
import Navbar from './Navbar'

const Layout = ({children, sidebarOpen, setSidebarOpen}) => {
  return (
    <>
        <Navbar sidebarOpen = {sidebarOpen} setSidebarOpen = {setSidebarOpen}/>
            <div className={`pt-5 transition-all duration-300 bg-gray-100 min-h-screen p-4 ${sidebarOpen?'ml-64':'ml-0'}`}>
                {children}
            </div>
    </>
  )
}

export default Layout
