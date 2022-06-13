import { useEffect, useState } from 'react'

const ListAndKeysDynamic = () => {
  const [value, setValue] = useState()

  // ici nos clées seront créer/modifier dynamiquement
  // via une seule méthode qu'on va importer dans tout nos champs input
  const handleChangeInput = (element) => {
    setValue((prevState) => ({
      ...prevState,
      [element.target.name]: element.target.value,
    }))
  }

  useEffect(() => {
    console.log('value', value)
  }, [value])

  return (
    <div>
      <input
        name="emailling"
        placeholder="moninput2"
        onChange={(e) => handleChangeInput(e)}
      />
      <input
        name="emailling2"
        placeholder="moninput2"
        onChange={(e) => handleChangeInput(e)}
      />

      <input
        name="emailling3"
        placeholder="moninput2"
        onChange={(e) => handleChangeInput(e)}
      />

      <input
        name="moninput1"
        placeholder="moninput1"
        onChange={(e) => handleChangeInput(e)}
      />
    </div>
  )
}

export default ListAndKeysDynamic
