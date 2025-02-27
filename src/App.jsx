import React from 'react'
import './assets/styles/index.css'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { PrivateRoute } from './services/PrivateRoute'
import Form from './components/Form'
// import '../node_modules/react-toastify/dist/ReactToastify.css'


const App = () => {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element ={<LoginPage/>}/>
      <Route path='/' element ={<HomePage/>}>
          <Route path='/' element={<PrivateRoute special={<Form/>}/>} />
      </Route>
    </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App