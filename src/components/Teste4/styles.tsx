import styled from "styled-components";
import { layout } from "styled-system";

export const ContainerTeste4 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
`

export const Result4 = styled.div`
  width: 70%;
  height: 100%;
  text-align: center;
  font-family: 'Times New Roman', serif;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 10px;

  span {
    width: 90%;
    font-size: 30px;
    padding: 20px;
    border-radius: 5px;
    border: 2.5px solid #e0e0e0;
    background-color: #B4C5E4;
    ${layout}
  }

  button {
    width: 200px;
    height: 40px;
    color: #fff;
    margin-top: 5px;
    border-radius: 5px;
    cursor: pointer;
    justify-content: center;
    background-color: #311847;

    :active {
      border-left: 2px;
      border-top: 2px;
    }
  }

  div#listaCep {
    display: flex;
    padding: 10px;
    flex-direction: row;
    width: 100%;
    height: 75%;
    border: 1px solid #2B4141;
    
    div#inputsCep {
      width: 23.4%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      input {
        height: 30px;
        text-align: center;
        border-radius: 5px 10px;
      }
    }

    div#infoCep {
      width: 100%;
      height: 100%;
      display: flex;
      padding-top: 65px;
      flex-direction: column;
      text-align: center;

      label {
        font-weight: bold;
      }

      div#informacoes {
        display: flex;
        width: 100%;
        height: 10%;
        margin-bottom: 30px;
        font-size: 25px;
        flex-direction: row;
        justify-content: space-around;
        justify-items: center;
        text-align: center;
      }
    } 
  }
`
export const CepInfo = styled.p`
  font-size: 25px;
  margin: 0;
  margin-left: -40px;
`

export const Inputs = styled.div`
  width: 94%;
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  align-items: center;
  justify-content: space-evenly;

  button {
    margin-bottom: 17px;
  }

  input {
    height: 40px;
    width: 40%;
    border-radius: 5px 10px;
    
    ::placeholder {
      text-align: center;
    }
  }
`

export const Desafio4 = styled.div`
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