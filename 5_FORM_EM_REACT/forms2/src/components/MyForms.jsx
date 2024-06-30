import React from 'react'
import {useState} from 'react'

import "./MyForms.css";

const MyForms = ({user}) => {
    //controlled inputs
  //3- gerenciamento de dados

  const [name, setName] = useState(user ? user.name : '');
  const [email,setEmail] = useState( user ? user.email : '');

  const [bio, setBio] = useState(user ? user.bio : '');

  const [role,setRole] =useState(user ? user.role : '');

   

  const handleName = (e) =>{
      setName(e.target.value)
  }
  console.log(name);
  console.log(email);



  const handleSubmit = (event)=>{
       event.preventDefault();
       console.log("enviando o formulário!")
       console.log(name,email,bio,role);
        //validação
        //envio
       //limpar formulario

       setName("");
       setEmail("");
       setBio("");
       setRole("");
  }
 
  return (
    <div>
        {/**Envio de forms */}
      {/**Criando Forms */}
      <h2>forms</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}
          value={name} />
        </div>
        {/*Label envolvendo input */}
        <label>
          <span>Email:</span>
          {/*Simplificação da manipulação de state */}
          <input 
          type="email" 
          value={email}name="email" placeholder="Digite o seu email" 
          onChange={(e) => setEmail(e.target.value)}/>
        </label>
        {/**Textarea */}
        <label>
            <span>Bio:</span>
            <textarea name="bio" placeholder="Descrição do usuário" onChange ={(e) => setBio(e.target.value)} value={bio}>
        </textarea>
        </label>

        {/** 8 - Select */}
        <label htmlFor="">
            <span>Função no Sistema</span>
            <select 
            name="role" onChange ={(e) => setRole(e.target.value)}>
                <option value="use">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
            </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default MyForms