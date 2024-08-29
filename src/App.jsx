// import { useState } from 'react'
//import { ReactComponent as Logo } from './assets/images/reactImage.jpg';
// import viteLogo from '/vite.svg'
import './styles/App.css'
import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

//importing impages


function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      
    </>

  )
}

export default App
