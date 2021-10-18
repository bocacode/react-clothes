import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-evenly', padding: '0.4em' }}>
      <NavLink exact to='/'>Home</NavLink>
      <NavLink exact to='/clothes'>Clothes</NavLink>
      <NavLink exact to='/add'>Add</NavLink>
    </nav>
  )
}