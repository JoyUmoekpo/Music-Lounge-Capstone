import './App.css';

import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import AuthContext from './store/authContext';

const App = () => {

  const authCtx = useContext(AuthContext);

  return (
    <div className='app'>
      <Header/>
      <Sidebar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={!authCtx.token ? <Auth/> : <Navigate to='/'/>}/>
        <Route path='/profile' element={authCtx.token ?<Profile/> : <Navigate to='/auth'/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App