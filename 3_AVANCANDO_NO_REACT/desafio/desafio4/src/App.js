import logo from './logo.svg';
import './App.css';
import UserDetails from './components/UserDetails';

function App() {

  const users = [
    { id: 1, name: "João", age: 17, profession: "Estudante" },
    { id: 2, name: "Maria", age: 30, profession: "Engenheira" },
    { id: 3, name: "Carlos", age: 25, profession: "Desenvolvedor Junior" },
    { id: 1, name: "Thiago", age: 35, profession: "Enfermeiro" },
  ];
  return (
    <div className="App">
      {users.map((user)=>(
        <UserDetails 
        key = {user.id}
        name = {user.name} 
        age = {user.age}
        profession={user.profession}
        />
      ))}
    </div>
  );
}

export default App;
