import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDthrqWGvCBLiZU7tGBjOAWuoFVU6d3JCk",
  authDomain: "bc-clothes.firebaseapp.com",
  projectId: "bc-clothes",
  storageBucket: "bc-clothes.appspot.com",
  messagingSenderId: "442059323550",
  appId: "1:442059323550:web:4389576762313bc667a38f"
}

function Login({ setUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let history = useHistory()
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const userLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(res => didLogin(res.user))
      .catch(err => alert(err.message))
  }
  const googleLogin = (e) => {
    e.preventDefault()
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then(res => didLogin(res.user))
      .catch(err => alert(err.message))
  }
  const didLogin = (user) => {
    localStorage.setItem('userId', user.uid)
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
    setTimeout(() => {
      history.push('/add')
    }, 5000)
  }
  return (
    <>
      <h1>Please Login:</h1>
      <form onSubmit={e => {
        e.preventDefault()
        userLogin()
      }}>
        <label htmlFor="email">Email:
          <input type="email" name="email" value={email}
            onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <label htmlFor="password">Password:
          <input type="password" name="password" value={password}
            onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Login" />
        &nbsp;
        <button onClick={e => googleLogin(e)}>Sign in with Google</button>
      </form>
    </>
  )
}

export default Login