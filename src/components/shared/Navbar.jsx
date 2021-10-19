import { NavLink } from "react-router-dom"

export default function Navbar({ user }) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-evenly', padding: '0.4em' }}>
      <NavLink exact to='/'>Home</NavLink>
      <NavLink exact to='/clothes'>Clothes</NavLink>
      <NavLink exact to='/coffee'>Coffee</NavLink>
      {user
        ? <NavLink exact to='/add'>Add</NavLink>
        : <NavLink exact to='/login'>Login</NavLink>
      }
    </nav>
  )
}