import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  background-color: #313131;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 768px) {
    margin-top: 12px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 93px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2b2b2b;
  border-radius: 2px;
  border: 1px solid #2b2b2b;

  h1 {
    color: #71bb00;
  }
  p {
    font-size: 15px;
    font-weight: 100;
    text-transform: uppercase;
    color: #707070;
  }
`;

export const ContainerItems = styled.div`
  padding: 40px 30px;
  background-color: #343434;
  display: flex;
  flex-direction: column;
  border: 1px solid #707070;
  gap: 10px;
`;
export const Image = styled.img`
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  border: none;
  width: 90px;
  height: 90px;

  margin-left: 200px;
`;
export const InputFile = styled.input`
  padding-top: 80px;
  position: absolute;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  border: none;
  opacity: 0;
`;

export const InputName = styled.input`
  width: 500px;
  height: 40px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #494949;
  border: none;
  outline: none;
  padding-left: 10px;
  font-size: 15px;
  font-weight: 200;
  color: #ffffff;
  ::placeholder {
    color: #ffffff;
    padding: 10px;
  }
`;

export const InputMessage = styled.input`
  width: 500px;
  height: 100px;
  border-radius: 10px;
  background-color: #494949;
  border: none;
  outline: none;
  padding-left: 10px;
  font-size: 15px;
  font-weight: 200;
  color: #ffffff;
  ::placeholder {
    color: #ffffff;
    padding: 10px;
  }
`;
export const Button = styled.button`
  background-color: #707070;
  border: 1px solid #707070;
  color: #ffffff;
  transition: 0.5s;
  cursor: pointer;
  width: 100px;
  margin-top: 30px;
  margin-left: 400px;
  height: 45px;
  border-radius: 10px;
  display: inline-block;
`;

export const ButtonDescartar = styled.button`
  background-color: transparent;
  color: #ffffff;
  border: none;
  text-decoration: underline;
  margin-top: -40px;
  cursor: pointer;
  padding-left: 140px;
  display: inline-block;
`;

export const User = styled.div`
  padding: 40px 30px;
  width: 570px;
  height: 200px;
  background-color: #343434;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  border: none;
  outline: none;
  padding-left: 10px;
  font-size: 15px;
  font-weight: 200;
  color: #ffffff;
  border: 1px solid #707070;
  border-radius: 2px;

  span {
    display: inline;
    margin-left: -180px;
  }
  p {
    margin-top: -55px;
    margin-left: 140px;
  }

  button {
    margin-left: 530px;
    margin-top: -30px;
    position: absolute;

    background: none;
    cursor: pointer;
    border: none;
  }
`;
