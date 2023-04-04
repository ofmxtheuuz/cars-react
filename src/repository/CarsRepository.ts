
interface Cars {
  id: number,
  name: string,
  model: string,
  year: number
}

class CarsRepository {

  private cars: Cars[] = [
    {id: 1, name: "Compass", model: "Jeep", year: 2019},
    {id: 2, name: "Skyline", model: "Nissan", year: 2010},
    {id: 3, name: "GTR", model: "Nissan", year: 2011},
    {id: 4, name: "Aventador", model: "Lamborghini", year: 2015},
    {id: 5, name: "911", model: "Porsche", year: 2019},
  ] 

  getAll() {
    return this.cars
  }
}

export default new CarsRepository()