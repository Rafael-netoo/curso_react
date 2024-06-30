const Challenge = () =>{

    const numero1 = 4;
    const numero2 = 5;
const handleClick = (numero1,numero2) =>{
    const resultado = numero1 + numero2;
    console.log({resultado})
};

    return (
      <div>
        <p>Número 1: {numero1}</p>
        <p>Número 2: {numero2}</p>
        <button onClick={()=> console.log(numero1+numero2)}> Somar valores</button>
      </div>
    );
}
export default Challenge;