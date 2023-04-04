import express, { Request, Response } from "express"
import cors from "cors"

import CarsRepository from "./repository/CarsRepository"

const app = express()

app.use(cors())

app.get("/", (request: Request, response: Response) => {
  response.send({
    status: 200,
    content: "API running"
  })
})
app.get("/cars",  (request: Request, response: Response) => {
  try {
    response.send({
      status: 200,
      content: CarsRepository.getAll()
    })
  } catch(e) {
    console.log(e)
    response.send({
      status: 500,
      content: "An interal error."
    })
  }
})

app.listen(9090, () => {
  console.log("Server running on port 9090")
})