import React from 'react'
import Clock from './components/atoms/Clock'
import Toggle from './components/atoms/Toggle'
import MonComposant from './components/atoms/MonComposantAEtat'
import Button from './components/atoms/Button'
import Welcome from './components/molecules/Welcome'
import './App.css'
import WelcomeHooks from './components/molecules/WelcomeHooks'

class App extends React.Component {
  constructor(props) {
    super(props)
    // notre déclaration pour le count: 0 par défaut
    this.state = { count: 0 }
  }

  // notre fonction pour update le count
  updateMyCount = () => {
    // cette fonction est propre à React, setState() permet de mettre à jour
    //l'état initialisé dans le constructeur
    // ici , nous voyons this.state = {count: 0}, donc this.state.count = 0
    this.setState((state) => ({ count: state.count + 1 }))
  }

  style = {
    monDesign: {
      border: '2px solid green',
      padding: 20,
    },
  }

  render() {
    return (
      <div className="App" style={this.style.monDesign}>
        {/* Notre composant Toggle */}
        <Toggle />
        {/* Notre composant MonComposant */}
        <MonComposant />
        {/* Notre composant horloge */}
        <Clock />
        {/* notre composant sur l'exercice input OnChange  */}
        {/* <Input /> */}
        {/* notre exercice utilisant le composant Button pour incrementer un compteur */}
        {this.state.count}
        <Button onClick={() => this.updateMyCount()}>
          mon texte dynamique
        </Button>
        <Button>le texte change alors que c'est le meme composant</Button> */
        <Welcome />
        <WelcomeHooks />
      </div>
    )
  }
}

export default App
