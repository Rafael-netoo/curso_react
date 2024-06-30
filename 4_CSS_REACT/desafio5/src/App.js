import logo from './logo.svg';
import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    {
      nome: "kwid",
      marca: "Renault",
      id: 1,
      cor: "Branco",
      ano: 2020,
      preco: 45000,
    },
    {
      nome: "Celta",
      marca :"Chevrolet",
      id: 2,
      cor: "Prata",
      ano: 2010,
      preco: 10000,
    },
    {
      nome: "Sandero",
      marca: "Renault",
      id: 3,
      cor: "Laranja",
      ano: 2023,
      preco: 50000,
    },
    {
      nome: "Onix",
      marca: "Chevrolet",
      id: 3,
      cor: "Branco",
      ano: 2020,
      preco: 35000,
    },
  ];
  return (
    <div className="App">
      <h1>Carros Disponíveis</h1>
      <div className='car_container'>
        {cars.map((car) => (
          <CarDetails car={car} key={car.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
