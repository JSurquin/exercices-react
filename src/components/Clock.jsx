import React from 'react';

class Clock extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {date: new Date()}
  }
 
  updateMyTime = () => {
    this.setState({date: new Date()});
  }

  componentDidMount() {
    setInterval(() => this.updateMyTime(), 1000 )
  }
  // créer une fonction qui va mettre à jour le temps dans l'état : date 
  // utiliser le cycle de vie pour faire qu'au chargement du composant
  // on lance la fonction qui nous permet de mettre à jour l'état
  // comme une vraie horloge , on aimerais , que ça se lance toutes les secondes

  render(){
    return (
      <div>
      {/* <button onClick={() => this.updateMyTime()}>mon super bouton</button> */}
    <p>{this.state.date.toLocaleTimeString()}</p>
    </div>

    ) 
  }
}

export default Clock;