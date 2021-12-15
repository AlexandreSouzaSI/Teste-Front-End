import styled from "styled-components";

export const ContainerTeste1 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;

  @media(max-width: 375px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    }
`

export const Desafio1 = styled.div`
  width: 45%;
  height: 100%;
  text-align: center;
  font-family: 'Times New Roman', serif;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  @media(max-width: 375px) {
    width: 45%;
    height: 100%;
    text-align: center;
    }

  h1 {
    margin-top: 200px;
    font-size: 100px;

    @media(max-width: 1500px) {
      font-size: 80px;
    }
    @media(max-width: 375px) {
      font-size: 20px;
      margin-top: 60px;
      margin-left: 10px;
    }

  }

  p {
    font-size: 30px;
    margin-left: 110px;
    width: 70%;

    @media(max-width: 1500px) {
      font-size: 20px;
      margin-left: 60px;
    }
    @media(max-width: 375px) {
      font-size: 14px;
      margin-left: 20px;
      width: 70%;
    }
  }

  img {
    width: 50%;
    height: 50%;
    margin-left: 180px;

    @media(max-width: 1500px) {
      width: 40%;
      height: 30%;
      margin-left: 120px;
    }
    @media(max-width: 375px) {
      display: none;
    }
  }
`

export const Resolucao1 = styled.div`
  width: 70%;
  height: 100%;
  text-align: center;
  font-family: 'Times New Roman', serif;
  display: flex;
  flex-direction: column;

  span {
    width: 90%;
    font-size: 30px;
    margin-top: 50px;
    padding: 20px;
    border-radius: 5px;
    border: 2.5px solid #e0e0e0;
    background-color: #B4C5E4;

    @media(max-width: 1500px) {
      font-size: 20px;
      width: 90%;
    }
    @media(max-width: 375px) {
      width: 90%;
      font-size: 14px;
      margin-top: 15px;
      margin-left: 10px;
      padding: 20px;
      border-radius: 5px;
      border: 2.5px solid #e0e0e0;
      background-color: #B4C5E4;
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
      width: 100px;
      height: 30px;
      color: #fff;
      margin-top: 10px;
    }

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

  @media(max-width: 375px) {
      margin-top: 10px;
      width: 100%;
  }

  input {
    height: 40px;
    width: 30%;
    text-align: center;
    border-radius: 5px 10px;

    @media(max-width: 375px) {
      width: 40%;

      ::placeholder {
        font-size: 10px;
      }
    }

    ::placeholder {
      text-align: center;
    }
  }
`

export const Resposta1 = styled.div`
  width: 93%;
  height: 50%;
  padding: 20px;
  font-size: 25px;
  margin-bottom: 100px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid #2B4141;

  @media(max-width: 375px) {
    width: 93%;
    height: 100%;
    padding: 20px;
    font-size: 14px;
    margin-bottom: 100px;
    margin-top: 10px;
  }
`
