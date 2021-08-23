import "./Switch.css"

function Switch({ onChange, label, state }) {

  function handleChange(evt) {
    onChange(evt)
  }

  return (
    <div className="switch">
      <label className="switch__label">
        <div className={`switch__checkbox ${state && 'switch__checkbox_active'}`}></div>
        <span className="switch__label-text">{label}</span>
        <input type="checkbox" className="switch__checkbox-input" onChange={handleChange} />
      </label>
    </div>
  )
}

export default Switch
