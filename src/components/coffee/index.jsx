import { useState, useEffect } from 'react'

function Coffee() {
  // create a state variable to hold our coffee list
  const [coffeeList, setCoffeeList] = useState()
  // create a state variable to hold our coffee temperature
  const [temperature, setTemperature] = useState('hot')
  // create a useEffect to get our coffee list
  useEffect(() => {
    setCoffeeList(null)
    fetch(`https://api.sampleapis.com/coffee/${temperature}`)
      .then(res => res.json())
      .then(data => setCoffeeList(data))
      .catch(err => alert(err))
  }, [temperature])
  // display our coffee list
  return (
    <>
      <h1>Coffee</h1>
      <button onClick={() => setTemperature('hot')}>HOT</button>&nbsp;
      <button onClick={() => setTemperature('iced')}>ICED</button>
      {!coffeeList
        ? <h2>Loading...</h2>
        : coffeeList.map(item => {
            return <h2 key={item.id}>{item.title}</h2>
          })
      }
    </>
  )
}

export default Coffee