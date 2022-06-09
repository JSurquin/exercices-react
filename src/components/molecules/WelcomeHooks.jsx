import React from 'react'
import Button from '../atoms/Button'
import Login from './Login'
import Logout from './Logout'
import { useState } from 'react'

const WelcomeHooks = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <div>
      <Button onClick={() => setIsAuthenticated(!isAuthenticated)}>
        {!isAuthenticated ? 'Connexion' : 'Déconnexion'}
      </Button>
      <Button onClick={() => setIsAuthenticated(false)}>
        Forcer la déconnexion
      </Button>
      {isAuthenticated ? <Login /> : <Logout />}
    </div>
  )
}

export default WelcomeHooks
