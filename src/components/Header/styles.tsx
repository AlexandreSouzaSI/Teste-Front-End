import styled from "styled-components";

export const Heade = styled.div`
  width: 100%;
  height: 2%;
  background-color: #F0CF65;
  box-shadow: 1px 1px 5px 1px #f0d88c;
  font-family: 'Times New Roman', serif;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    font-size: 30px;

    @media (max-width: 1090px) {
      font-size: 28px;
    }
    @media (max-width: 995px) {
      font-size: 26px;
    }
    @media (max-width: 879px) {
      font-size: 24px;
    }
    @media (max-width: 690px) {
      font-size: 22px;
    }
    @media (max-width: 620px) {
      font-size: 20px;
    }
    @media (max-width: 560px) {
      font-size: 18px;
    }
    @media (max-width: 500px) {
      font-size: 16px;
    }
  }
`