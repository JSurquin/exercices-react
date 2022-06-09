import React from 'react'

class MonDeuxiemeComposant extends React.Component {
  render() {
    return (
      <div style={{ border: '2px solid red' }}>
        <p>je suis apeller dans MonComposantAEtat </p>
        <button onClick={this.props.mettreAJourMaPhrase}>
          changer mon nom
        </button>
      </div>
    )
  }
}

class MonComposantAEtat extends React.Component {
  constructor(props) {
    super(props)
    //MonComposantAEtat.state
    this.state = { name: 'jimmylan' }
  }

  maFunctionVide = () => {
    return null
  }

  mettreAJourMaPhrase = () => {
    this.setState({ name: 'john' })
  }

  render() {
    return (
      <div style={{ border: '2px solid blue' }}>
        <p>un simple composant</p>
        <p>{this.state.name}</p>
        {this.maFunctionVide()}
        <MonDeuxiemeComposant
          mettreAJourMaPhrase={() => this.mettreAJourMaPhrase()}
        />
      </div>
    )
  }
}

export default MonComposantAEtat
