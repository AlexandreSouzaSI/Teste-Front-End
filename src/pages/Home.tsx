import { ContainerPrincipal } from "../components/Container/styles";
import { Header } from "../components/Header";
import { Teste1 } from "../components/Teste1";
import { Teste2 } from "../components/Teste2";
import { Teste3 } from "../components/Teste3";
import { Teste4 } from "../components/Teste4";
import { GlobalStyles } from "./styled";


export const Home = () => {
  return (
    <>
      <GlobalStyles />
      <ContainerPrincipal>
        <Header />
        <Teste1 />
        <Teste2 />
        <Teste3 />
        <Teste4 />
      </ContainerPrincipal>
    </>
  )
}