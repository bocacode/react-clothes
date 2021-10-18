import { BrowserRouter as Router,
  Switch, Route } from 'react-router-dom'
import Home from './components/home'
import AddClothes from './components/add'
import Clothes from './components/clothes'
import Navbar from './components/shared/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path='/clothes' component={Clothes} />
          <Route path='/add' component={AddClothes} />
          <Route path='/' component={Home} />
        </Switch>
      </main>
    </Router>
      )
}

export default App
