import './App.css'
import './bootstrap.min .css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Home from './Pages/Home'
import History from './Pages/History'
import Footer from './Components/Footer'
import Landing from './Pages/Landing'
import { Routes,Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from './Pages/Login';
import Register from './Pages/Register';
function App() {

  return (
    <>
   

    <Header/>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/his' element={<History/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
     </Routes>
     <Footer/>
     <ToastContainer/>
      
    </>
  )
}

export default App
