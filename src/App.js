// import Clock from './components/Clock';
// import Toggle from './components/Toggle';
// import MonComposant from './components/MonComposantAEtat';
import './App.css';
import React, {useState} from 'react';
import Button from './components/Button';


class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {count: 0}
  };

  updateMyCount = () => {
    this.setState(state => ({count: state.count + 1}))
  }

  render()
  {
    return (
      <div className="App" style={{border: '2px solid green', padding: 20}}>
      {this.state.count}
      <Button onClick={() => this.updateMyCount()}>
        mon texte dynamique
        </Button>
        <Button>
        le texte change alors que c'est le meme composant
        </Button>
    </div>
    )
  }
}

export default App;
