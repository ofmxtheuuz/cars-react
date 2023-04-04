



const ShowCar = (props: any) => {
  return (
    <div>
      <h3>{props.car.name}</h3>
      <p>Modelo: {props.car.model}</p>
      <p>Nome: {props.car.name}</p>
    </div>
  )
}

export default ShowCar