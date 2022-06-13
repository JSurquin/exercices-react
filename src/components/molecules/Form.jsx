import { useState } from 'react'

const Form = () => {
  const [value, setValue] = useState('')

  const arreteLaSoumission = (e) => {
    e.preventDefault()
    console.log('ma valeur après soumission', value)
  }

  return (
    <form
      // onSubmit={(e) => {
      //   e.preventDefault()
      //   console.log('ma valeur après soumission', value)
      // }}
      onSubmit={(e) => arreteLaSoumission(e)}
    >
      {/* notre input pour écrire */}
      <input onChange={(e) => setValue(e.target.value)}></input>
      <input type="submit"></input>
    </form>
  )
}

export default Form
