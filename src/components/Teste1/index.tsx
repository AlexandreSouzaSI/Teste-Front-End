import { ContainerTeste1, Desafio1, Inputs, Resolucao1, Resposta1 } from "./styles";

// @ts-ignore 
import Polindromo from '../../assets/polindromo.png'
import { useState } from "react";

export const Teste1 = () => {

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(0);
  
  

  async function HandleResult() {

    console.log(typeof(number1))
    
    const values = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ n1: number1, n2: number2 }),
      withCredentials: true,
      credentials: "include",
    };
    // @ts-ignore
    const response = await fetch("http://localhost:4000/test1", values);
    const data = await response.json();

    console.log(data)
  }
  

  return (
    <ContainerTeste1>
      <Desafio1>
        <h1>Palíndromos</h1>
        <p>Palíndromo é uma palavra, frase ou número que permanece igual quando lida de trás para frente</p>
        <img src={Polindromo} alt="Polindromo" />
      </Desafio1>

      <Resolucao1>
        <span>Nesse desafio você escolhera 2 numeros, que serão usados como ponto inicial e final, no intervalo entre os 2 numeros, todos os Palíndromos serão mostrados.</span>
        <Inputs>
          <input type="text" placeholder="Informe o primeiro numero" onChange={(e) => setNumber1(e.target.value)}/>
          <input type="text" placeholder="Informe o segundo numero" onChange={(e) => setNumber2(e.target.value)}/>
        </Inputs>
        <Inputs>
          <button onClick={HandleResult}>Resultado</button>
        </Inputs>
        <Resposta1>
          
        </Resposta1>
      </Resolucao1>
    </ContainerTeste1>
  )
}