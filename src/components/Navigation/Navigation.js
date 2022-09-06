import { NavLink } from "react-router-dom"

function Navigation() {
  return (
    <div className="navigation_wrapper">
        <div className="navigation_wrapper__left">
          Harish Nanthan
        </div>
        <div className="navigation_wrapper__right">
            <ul className="navigation_wrapper__right___links">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Navigation