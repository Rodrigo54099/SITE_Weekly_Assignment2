import "./FilterInput.css"

export default function FilterInput({ filterInput, onInputChange }) {
  return (
    <div className="FilterInput">
      <i className="material-icons">search</i>
      <input
        type="text"
        placeholder={"Search store..."}
        value={filterInput}
        onChange={onInputChange}
        // any other props here
      />
    </div>
  )
}
