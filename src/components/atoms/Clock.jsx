import React from 'react'

class MonSuperComposant extends React.Component {
  render() {
    return (
      <p style={{ border: '2px solid blue' }}>
        {' '}
        {this.props.date.toLocaleTimeString()}
      </p>
    )
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  updateMyTime = () => {
    this.setState({ date: new Date() })
  }

  componentDidMount() {
    this.TimerId = setInterval(() => this.updateMyTime(), 1000)
    setTimeout(() => clearInterval(this.TimerId), this.props.stop)
  }

  // créer une fonction qui va mettre à jour le temps dans l'état : date
  // utiliser le cycle de vie pour faire qu'au chargement du composant
  // on lance la fonction qui nous permet de mettre à jour l'état
  // comme une vraie horloge , on aimerais , que ça se lance toutes les secondes

  render() {
    return (
      <div style={{ border: '2px solid red' }}>
        <button onClick={() => this.updateMyStringAndMyDate()}>
          mon super bouton
        </button>
        <p>{this.state.date.toLocaleTimeString()}</p>
        <MonSuperComposant date={this.state.date} />
      </div>
    )
  }
}

export default Clock
