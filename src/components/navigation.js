import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/contact">Contact</Link>
    <Link to="/reviews">Reviews</Link>
    <Link to="/news">News</Link>
    <ThemeChanger/>
  </nav>
  
)