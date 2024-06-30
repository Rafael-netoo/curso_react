import React from 'react'

const UserDetails = ({id,name,age,profession}) => {
  return (
    <div>
      <h3>Dados do usuário</h3>
      <ul>
        <li>Name : {name}</li>
        <li>Idade : {age}</li>
        <li>Profissão : {profession}</li>
      </ul>
      {age >= 18 ? (
        <p>Este usuário está apto a solicitar carteira de motorista</p>
      ) : (
        <p>Este usuário não está apto a solicitar carteira de motorista</p>
      )}
    </div>
  );
}

export default UserDetails