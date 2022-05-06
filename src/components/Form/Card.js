import React, { useContext } from 'react'
import { SwitchCard } from './styles/FormStyles'
import { FormContext } from './Form'

const Card = () => {

  const Context = useContext(FormContext)

  return (
    <SwitchCard switch={Context.switchBoolean}  >
        
    </SwitchCard>
  )
}

export default Card



//SPRAWDZIC CZY MOZE GLASSMORPHISM BY PASOWAL FAJNIE DO TEGO