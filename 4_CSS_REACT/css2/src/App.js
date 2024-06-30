import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent.jsx';
import { useState } from 'react';
import Title from './components/Title.jsx';

function App() {
  const n = 15;
  const [name] = useState("Matheus")
  const redTitle = (true);
  return (
    <div className="App">
      {/**css global */}
      <h1>React com CSS</h1>
      {/**css de componente */}
      <MyComponent />
      <p>Este parágrafo é do app.jsx</p>
      {/**Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/**css Inline dinamico  */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinamico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinamico
      </h2>
      <h2 style={name === "Matheus" ? { color: "green", backgroundColor:"#000" } : null}>
       Teste Nome
      </h2>
      {/**Classe diâmica */}
      <h2 className={redTitle ? "red-title" : "title" }>Este título vai ter classe dinâmica</h2>
      {/**css modules */}
      <Title/>
    </div>
  );
}

export default App;
