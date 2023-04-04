import axios from "axios"
import { useEffect, useState } from "react"
import ShowCar from "./components/ShowCar"

function App() {

  const [cars, setCars] = useState({status: 500, content: []})

  useEffect(() => {
    const fetchData = async() => {
      const result = await axios("http://localhost:9090/cars")
      setCars(result.data)
    }

    fetchData()
  })

  return (
    <div>
      <h1>Carros</h1>
      {cars.content.length > 0 && cars.content.map((car, index) => {
        return <ShowCar key={index} car={car} />
      })}
    </div>
  )
}

export default App
