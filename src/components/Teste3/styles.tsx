import styled from "styled-components";

export const ContainerTeste3 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  margin-top: 80px;
`

export const Result3 = styled.div`
  width: 70%;
  height: 100%;
  padding: 20px;
  text-align: center;
  font-family: 'Times New Roman', serif;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  span {
    width: 90%;
    font-size: 30px;
    margin-top: 50px;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
  }

  button {
    width: 200px;
    height: 40px;
    color: #fff;
    margin-top: 20px;
    border-radius: 5px;
    cursor: pointer;
    justify-content: center;
    background-color: #311847;

    :active {
      border-left: 2px;
      border-top: 2px;
    }
  }

  div#carOrMoto {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    button {
      font-size: 20px;
    }
  }
`

export const Inputs = styled.div`
  width: 94%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  label {
    width: 400px;
    font-size: 25px;
    text-align: start;
    font-family: 'Times New Roman', serif;
  }

  input {
    height: 40px;
    width: 40%;
    margin-bottom: 10px;
    justify-content: center;
    text-align: center;
    border-radius: 5px 10px;
    
    ::placeholder {
      text-align: center;
    }
  }
`

export const Desafio3 = styled.div`
  width: 45%;
  height: 100%;
  text-align: center;
  font-family: 'Times New Roman', serif;
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 200px;
    font-size: 100px;
  }

  p {
    font-size: 30px;
    margin-left: 110px;
    width: 70%;
  }

  img {
    width: 50%;
    height: 40%;
    margin-left: 180px;
  }
`

export const TableCar = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;

  div#cabecalho {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #f1f1f1;
    width: 100%;
    height: 7%;

    p {
      font-size: 24px;
      width: 25%;
      height: 100%;

      border: 1px solid #f1f1f1;
    }
  }

  div#info {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #f1f1f1;
    width: 100%;
    height: 7%;

    p {
      font-size: 24px;
      width: 25%;
      height: 100%;

      border: 1px solid #f1f1f1;
    }
  }
`