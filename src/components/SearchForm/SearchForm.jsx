import "./SearchForm.css"

function SearchForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="search-form">
      <div className="search-form__input">
        <input type="text" placeholder="Фильм" className="search-form__field" />
        <button className="search-form__submit" type="submit">
          <span className="search-form__submit-icon"></span>
        </button>
      </div>
    </form>
  )
}

export default SearchForm
