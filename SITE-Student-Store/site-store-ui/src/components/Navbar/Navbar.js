import { Link } from "react-router-dom"
import FilterInput from "../FilterInput/FilterInput"
import codepath from "../../assets/codepath.svg"
import "./Navbar.css"

export default function Navbar({ filterInput, onInputChange }) {
  return (
    <nav className="Navbar">
      <Link className="logo" to="/">
        <img src={codepath} alt="logo" />
      </Link>

      <div className="search">
        <FilterInput filterInput={filterInput} onInputChange={onInputChange} />
      </div>

      <ul className="navLinks">
      <Link className="home" to={`/`}>
        <li>Home</li>
      </Link>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Buy More</li>
      </ul>


    </nav>
  )
}
