import styled from "styled-components";

export const ContainerTeste2 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  margin-top: 11px;
`

export const Result2 = styled.div`
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
`

export const Inputs = styled.div`
  width: 94%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 40px;

  input {
    height: 40px;
    width: 30%;
    text-align: center;
    border-radius: 10px 5px;
    
    ::placeholder {
      text-align: center;
    }
  }
`

export const Resposta2 = styled.div`
  width: 93%;
  height: 60%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #e0e0e0;
  margin-bottom: 100px;
`

export const InfoValores = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Informacao = styled.p`
  width: 50%;
  font-size: 25px;
  align-items: center;
`

export const Valores = styled.h3`
  width: 50%;
  font-size: 25px;
  align-items: center;
`

export const Desafio2 = styled.div`
  width: 45%;
  height: 100%;
  text-align: center;
  font-family: 'Times New Roman', serif;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

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
    height: 50%;
    margin-left: 180px;
  }
`