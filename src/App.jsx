import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet} from 'react-router-dom'
import Footer from './components/Footer'
import { AuthProvide } from './context/AuthContext'

function App() {
  

  return (
    <div>
      <AuthProvide>
        <Navbar />
        <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
          <Outlet />
        </main>
        <Footer/>
      </AuthProvide>
      
   
    </div>
  )
}

export default App
