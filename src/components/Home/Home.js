import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

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
    <div>
      <p>{user && user.email}</p>
      <p>{user && user.displayName}</p>
      <button onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default Home