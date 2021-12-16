import styled from "styled-components";
import { color, ColorProps, fontSize, FontSizeProps, layout, LayoutProps, margin, MarginProps, textAlign, TextAlignProps } from 'styled-system';

export const ContainerTeste2 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  margin-top: 11px;

  @media(max-width: 375px) {
      margin-top: 0px;
  }
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
    border: 2.5px solid #e0e0e0;
    background-color: #B4C5E4;

    @media(max-width: 375px) {
      font-size: 14px;
      margin-top: -40px;
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
    border-radius: 10px 5px;

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

export const Resposta2 = styled.div`
  width: 93%;
  height: 60%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #2B4141;
  margin-bottom: 100px;

  h2 {
    @media(max-width: 375px) {
      font-size: 12px;
      margin-bottom: 5px;
  }
  }
`

export const InfoValores = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  
`

type Font = FontSizeProps & LayoutProps & TextAlignProps & MarginProps & ColorProps;

export const Informacao = styled.p<Font>`
  width: 50%;
  font-size: 25px;
  align-items: center;
  ${fontSize}
  ${layout}
  ${textAlign}
  ${margin}
  ${color}

  @media(max-width: 375px) {
      font-size: 12px;
      margin-bottom: 5px;
  }

`

export const Valores = styled.h3`
  width: 50%;
  font-size: 25px;
  align-items: center;

  @media(max-width: 375px) {
      font-size: 14px;
      margin-bottom: 5px;
  }
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

    @media(max-width: 375px) {
      font-size: 18px;
      margin-top: 35px;
  }
  }

  p {
    font-size: 30px;
    margin-left: 110px;
    width: 70%;

    @media(max-width: 375px) {
      font-size: 16px;
      margin-left: 20px;
      margin-top: 10px;
  }
  }

  img {
    width: 50%;
    height: 50%;
    margin-left: 180px;

    @media(max-width: 375px) {
      display: none;
  }
  }
`