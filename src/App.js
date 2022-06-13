import React from 'react'
import Clock from './components/atoms/Clock'
import Toggle from './components/atoms/Toggle'
import MonComposant from './components/atoms/MonComposantAEtat'
import Button from './components/atoms/Button'
import Welcome from './components/molecules/Welcome'
import './App.css'
import Form from './components/molecules/Form'
import FormClass from './components/molecules/FormEnClass'
import WelcomeHooks from './components/molecules/WelcomeHooks'
import ListAndKeysDynamic from './components/molecules/ListAndKeys'
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
        <hr />
        <h1>Notre composant toggle</h1>
        <Toggle />
        <hr />
        <h1>Notre composant "MonComposant"</h1>
        <MonComposant />
        <hr />
        <hr />
        <h1>Notre composant horloge</h1>
        <Clock />
        <h1>
          notre exercice utilisant le composant Button pour incrementer un
          compteur
        </h1>
        {this.state.count}
        <Button onClick={() => this.updateMyCount()}>
          mon texte dynamique
        </Button>
        <h1>Notre composant en classe</h1>
        <Welcome />
        <h1>Notre composant fonctionnel</h1>
        <WelcomeHooks />
        <hr />
        <h1>Exercices sur les clefs dynamique</h1>
        <ListAndKeysDynamic />
        <hr />
        <h1>Mon formulaire en composant fonctionnel</h1>
        <Form />
        <hr />
        <h1> Mon formulaire en class</h1>
        <FormClass />
      </div>
    )
  }
}

export default App
