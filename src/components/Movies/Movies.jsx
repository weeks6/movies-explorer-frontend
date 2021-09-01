import "./Movies.css"

import SearchForm from "../SearchForm/SearchForm"
import Switch from "../Switch/Switch"
import { useState } from "react"

function Movies() {

  const [shorts, setShorts] = useState(false)

  function handleSearchForm() {

  }

  function handleSwitch(evt) {
    setShorts(evt.target.checked)
  }

  return (
    <main className="main container movies">
      <div className="movies__header">
        <SearchForm onSubmit={handleSearchForm} />
        <Switch label="Короткометражки" onChange={handleSwitch} state={shorts} />
      </div>
    </main>
  )
}

export default Movies
