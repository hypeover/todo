import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { LogoutButton, MainPage, NameText, NavBar, RestPage } from './styled/HomeStyles';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Routes/Dashboard';
import Projects from './Routes/Projects'


const Home = () => {

  const {user, logout} = UserAuth();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try { 
      await logout()
      navigate('/')
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <MainPage>
        <NavBar>
            <NameText>{user && user.displayName}</NameText>


            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </NavBar>
        <RestPage>
          <Routes>
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Projects' element={<Projects />} />
          </Routes>
        </RestPage>
    </MainPage>
  )
}

export default Home



