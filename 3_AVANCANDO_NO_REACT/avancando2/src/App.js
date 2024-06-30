import logo from './logo.svg';
import './App.css';

//imagens

import City from "./assets/city.jpg";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';

import ChangeMessageState from './components/ChangeMessageState';

import Message from "./components/Message";
import { useState } from 'react';


function App() {

  const name = "Joaquim";
  //*const [userName] = useState("Maria");

  const cars = [
    {id: 1, brand :"Ferrari", color: "amarela", newCar : true, km: 0},
    {id: 2, brand :"KIA", color: "Branco", newCar : false, km: 34343},
    {id: 3, brand :"Renault", color: "Azul", newCar : false, km:234 },
   
  ]

  function showMessage(){
console.log("Evento do componente pai!")
  }

  const [message,setMessage] = useState("");

  const handleMessage = (msg) =>{
    setMessage(msg);
  }
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/**Imagem em assets */}
      <div>
        <img src={City} alt="cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/**props */}
      <ShowUserName name={name} />
      {/**Destruturing*/}
      <CarDetails brand="VW" Km={10000} color="Azul" newCar={false} />

      <CarDetails brand="Ford" Km={0} color="Cinza" newCar={true} />
      <CarDetails brand="Mercedes" Km={20000} color="Branco" newCar={false} />
      {/**Loop em array de objetos  */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          Km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/*Fragment */}
      <Fragment propFragment="Teste" />
      {/*Children */}
      <Container myValue="Testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="Testing 2">
        <h5>Testando o container</h5>
      </Container>
      {/**Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/*state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;