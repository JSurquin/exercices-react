import React from 'react';

class Toggle extends React.Component {

  constructor(props)
  {
    super(props)
    this.state = {isToggleOn: true};
  }

  handleClick = () => {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn
    }))
  }


  checkMonToggleAvecDesIf = () => {
    if (this.state.isToggleOn)
    {
      return <p> le toggle est on </p>
    }
    else if(this.state.isToggleOn === "blabla") {
      return <p> test</p>
    }
    else {
      return <p>le toggle est off</p> 
    }
  }

  render(){
    return (
      <div>
      <button onClick={() => this.handleClick()}>mettre a jour le toggle</button>
      {/* si toggle est true , si c'est vrai alors ON
      sinon OFF , si c'est vrai , alors il est vraiment off
      il est pas off */}
      {/* ce cas de figure, utilisant des boolean , n'est pas intéressant
      car un boolean est toujours vrai (true) ou faux (false)
      mais c'est pour vous faire voir la logique d'opérateurs ternaire imbriqué */}
      {this.state.isToggleOn === true ? 'ON' : 'OFF' ? 'il est vraiment off' : 'il est pas off'}
      {this.checkMonToggleAvecDesIf()}
      </div>
    )
  
  }
}

export default Toggle;