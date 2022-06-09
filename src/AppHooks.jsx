import { useState } from 'react'
import Button from './components/Button'

const AppHooks = () => {
  const [count, setCount] = useState(0)
  function updateMyCount() {
    setCount(count + 1)
  }
  return (
    <div className="App" style={{ border: '2px solid green', padding: 20 }}>
      {count}
      <Button onClick={() => updateMyCount()}>mon texte dynamique</Button>
      <Button>le texte change alors que c'est le meme composant</Button>
    </div>
  )
}

export default AppHooks
