import React from 'react'
import Button from '../atoms/Button'
import Login from './Login'
import Logout from './Logout'

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isAuthenticated: false }
  }

  connectMe = (argument) => {
    // this.setState({isAuthenticated: !this.state.isAuthenticated})
    if (argument === 'false') {
      this.setState((state) => ({ isAuthenticated: false }))
    } else {
      this.setState((state) => ({ isAuthenticated: !state.isAuthenticated }))
    }
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.connectMe()}>
          {!this.state.isAuthenticated ? 'Connexion' : 'Déconnexion'}
        </Button>
        <Button onClick={() => this.connectMe('false')}>
          Forcer la déconnexion
        </Button>
        {this.state.isAuthenticated ? <Login /> : <Logout />}
      </div>
    )
  }
}

export default Welcome
