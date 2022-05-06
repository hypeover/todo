import React, { useState } from 'react'
import { WelcomePageStyle, WelcomeText, WelcomeInput } from './styled/HomeStyles'
import { UserAuth } from '../context/AuthContext'
import { updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const WelcomePage = () => {

  const [ name, setName ] = useState('')
  const { user }= UserAuth()
  const navigate = useNavigate()

  const register = async () => {
    try {
      await updateProfile(user, { displayName: name })
      navigate('/Home')
      console.log(user)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <WelcomePageStyle>
      <WelcomeText>Welcome in To Do App, <br />what's your name?</WelcomeText>
      <WelcomeInput onKeyPress={(e) => {if(e.code === 'Enter'){
        register()
      }}} onChange={(e) => setName(e.target.value)} placeholder='Type here your name' />
    </WelcomePageStyle>
  )
}

export default WelcomePage