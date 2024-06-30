
const ChangeMesssageState = ({handleMessage}) => {
   const messages = [ "Oi", "Olá", "Oi,tudo bem?"] 
  return (
    <div>
      <button onclick={() => handleMessage(messages[0])}>1</button>
      <button onclick={() => handleMessage(messages[1])}>2</button>
      <button onclick={() => handleMessage(messages[2])}>3</button>
    </div>
  );
}

export default ChangeMesssageState;