import React, { useRef, useState } from "react";
import Delete from "./assets/delete.svg";

import {
  Container,
  Content,
  ContainerItems,
  InputFile,
  Image,
  InputName,
  InputMessage,
  Button,
  ButtonDescartar,
  User,

} from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputMessage = useRef();
  const [file, setFile] = useState();

  function handleChange(e){
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function addNewUser() {
    setUsers([
      ...users,
      {
        Imagem: file,
        id: Math.random(),
        name: inputName.current.value,
        message: inputMessage.current.value,
      },
    ]);
  }

  function deleteUser(userId) {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  return (
    <Container>
      <Content>
        <h1> buildbox</h1>
        <p>web challenge</p>
      </Content>
      <ContainerItems>
        <div>
        <Image src={file} alt="logo-img" />
        <InputFile type="file" onChange={handleChange}></InputFile>
        </div>
        <InputName ref={inputName} placeholder="Digite seu nome" />

        <InputMessage ref={inputMessage} placeholder="Mensagem" />

        <Button onClick={addNewUser}>Publicar </Button>
        <ButtonDescartar type="reset">Descartar</ButtonDescartar>
        
        </ContainerItems>
  
        <div>
          {users.map((user) => (
            <User key={user.id}>
            <span> <Image src={user.Imagem} alt="logo-img2" /></span> 
              <p>{user.name} </p>  <p>{user.message}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Delete} alt="Deletar" />
              </button>
            </User>
          ))}
        </div>

        </Container>
  );
};

export default App;
