import { useState } from "react";


const ManageData = () => {
    const someData = 10;
    const [number,setNumber] = useState(15);
    console.log(someData);
    console.log(number);
  return (
    <div>
      <div>
        <p>valor : {someData}</p>
        <button onClick={() => (someData = 15)}>Clique aqui!</button>
      </div>
      <div>
        <p>Valor : {number}</p>
        <button onClick={() => (setNumber(25) )}>Clique aqui!</button>
      </div>
    </div>
  );
    
};

export default ManageData;
