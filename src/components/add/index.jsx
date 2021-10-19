import { useState } from 'react'

export default function AddClothes() {
  const [name, setName] = useState('')
  const [userName, setUserName] = useState()
  return (
    <>
      <h1>Welcome {userName || 'Guest'}</h1>
      <form onSubmit={e => {
          e.preventDefault()
          setUserName(name)
        }}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)} />
        <input type="submit" value="GO" />
      </form>
    </>
  )
}