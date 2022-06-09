import Clock from './components/Clock';
import Toggle from './components/Toggle';
import MonComposant from './components/MonComposantAEtat';
import './App.css';
import React from 'react';
import Button from './components/Button';

class App extends React.Component {
  
  constructor(props)
  {
    super(props);
    this.state = {count: 0}
    //this.updateMyCount = this.updateMyCount.bind(this);
  }

  updateMyCount = () => {
    // this.setState({count: this.state.count + 1});
    this.setState(state => ({count: state.count + 1}))
  }

  render()
  {
    return (
      <div className="App" style={{border: '2px solid green', padding: 20}}>
        {/* <MonComposant/>
        <Toggle/>
        <Clock/> */}
        
        {this.state.count}
        {/* est équivalent à App.state.count  */}


        <Button onClick={() => this.updateMyCount()}>
          mon texte dynamique
          </Button>

{/* pour faire qu'on peut changer le texte , via la props children qui se créer automatiquement */}
          <Button>
          le texte change alors que c'est le meme composant
          </Button>
      </div>
    );
  }
}

export default App;
