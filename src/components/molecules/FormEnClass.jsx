import React from 'react'

class FormEnClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.arreteLaSoumission = this.arreteLaSoumission.bind(this)
  }

  arreteLaSoumission = (e) => {
    e.preventDefault()
    console.log('ma valeur après soumission', this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.arreteLaSoumission}>
        <input
          onChange={(e) => this.setState({ value: e.target.value })}
        ></input>
        <input type="submit"></input>
      </form>
    )
  }
}

export default FormEnClass
