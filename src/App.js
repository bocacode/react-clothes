import { useState } from 'react'
import { BrowserRouter as Router,
  Switch, Route } from 'react-router-dom'
import Home from './components/home'
import AddClothes from './components/add'
import Clothes from './components/clothes'
import Navbar from './components/shared/Navbar'
import Coffee from './components/coffee'
import Login from './components/login'

function App() {
  const [user, setUser] = useState()
  return (
    <Router>
      <Navbar user={user} />
      <main>
        <Switch>
          <Route path='/clothes' component={Clothes} />
          <Route path='/add' component={AddClothes} />
          <Route path='/coffee' component={Coffee} />
          <Route path='/login'><Login setUser={setUser} /></Route>
          <Route path='/' component={Home} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
