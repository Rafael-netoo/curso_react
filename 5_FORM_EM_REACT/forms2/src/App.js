import logo from './logo.svg';
import './App.css';
import MyForms from "./components/MyForms"

function App() {
  return (
    <div className="App">
      <MyForms user={{name:"josias", email:"josias@gmail.com", bio :"sou advogado", role: "admin" }}/>
    </div>
  );
}

export default App;
