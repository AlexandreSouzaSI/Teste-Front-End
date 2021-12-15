import styled from "styled-components";

export const ContainerTeste3 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  margin-top: 80px;

  @media(max-width: 375px) {
      margin-top: -100px;
  }
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

    @media(max-width: 375px) {
      font-size: 14px;
      margin-bottom: 5px;
  }
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

    @media(max-width: 375px) {
      font-size: 12px;
      margin-left: 10px;
      width: 100px;
      height: 30px;
  }

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

      @media(max-width: 375px) {
      font-size: 12px;
  }
    }
  }
`

export const Salvar = styled.button`
    width: 200px;
    height: 40px;
    color: #fff;
    margin-top: 20px;
    border-radius: 5px;
    cursor: pointer;
    justify-content: end;
    background-color: #311847;

    @media(max-width: 375px) {
      font-size: 12px;
      width: 100px;
      height: 30px;
  }

    :active {
      border-left: 2px;
      border-top: 2px;
    }
`

export const Inputs = styled.div`
  width: 94%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media(max-width: 375px) {
      font-size: 12px;
      margin-top: 10px;
      width: 100%;
  }

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

    @media(max-width: 375px) {
      font-size: 12px;
      width: 120px;
      margin-bottom: 5px;
      margin-right: 5px;
      margin-left: 12px;
  }
  }

  input {
    height: 40px;
    width: 40%;
    margin-bottom: 10px;
    justify-content: center;
    text-align: center;
    border-radius: 5px 10px;

    
    @media(max-width: 375px) {
     width: 60%;
     height: 90%;
     margin-bottom: 20px;
  }
    
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

    @media(max-width: 375px) {
      font-size: 18px;
      margin-bottom: 20px;
      margin-top: 50px;
  }
  }

  p {
    font-size: 30px;
    margin-left: 110px;
    width: 70%;

    @media(max-width: 375px) {
      font-size: 12px;
      margin-left: 20px;
  }
  }

  img {
    width: 50%;
    height: 40%;
    margin-left: 180px;

    @media(max-width: 375px) {
      display: none;
  }
  }
`

export const TableCar = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  margin-top: 50px;
  flex-direction: column;

  @media(max-width: 375px) {
    width: 100%;
    height: 100%;
    display: flex;
  }

  div#cabecalho {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #2B4141;
    width: 100%;
    height: 7%;

    @media(max-width: 375px) {
      width: 100%;
      height: 7%;
  }

    p {
      font-size: 16px;
      color: black;
      width: 25%;
      height: 100%;
      padding-top: 2px;

      @media(max-width: 375px) {
      font-size: 10px;
  }

      border: 1px solid #2B4141;
    }
  }

  div#info {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid #2B4141;
    width: 100%;
    height: 7%;

    p {
      font-size: 16px;
      color: black;
      width: 25%;
      height: 100%;
      padding-top: 5px;

      @media(max-width: 375px) {
      font-size: 10px;
  }

      border-bottom: 1px solid #2B4141;
      border-right: 1px solid #2B4141;
      border-left: 1px solid #2B4141;
    }
  }
`