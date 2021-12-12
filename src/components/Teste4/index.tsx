import { ContainerTeste4, Desafio4, Inputs, Result4 } from "./styles"

// @ts-ignore 
import cep1 from '../../assets/cep.png'
import { useState } from 'react';
import { useEffect } from 'react';


export const Teste4 = () => {
  const [valor, setValor] = useState("")
  const [cep, setCep] = useState([])

  function handleAddCpf() {
    // @ts-ignore 
    cep.push(valor)
  }

  async function handleSearchCpf() {
    const values = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // @ts-ignore 
      body: JSON.stringify({ valor: cep }),
      withCredentials: true,
      credentials: "include",
    };
    // @ts-ignore
    const response = await fetch("http://localhost:4000/test4", values);
    const data = await response.json();

    console.log(data)
  }

  console.log(cep)
  return (
    <ContainerTeste4>
      <Result4>
          <span>Informe 5 CEP´s para consulta</span>
        <Inputs>
          <input type="text" placeholder="Informe os CPF" onChange={(e) => setValor(e.target.value)}/>
          <button onClick={handleAddCpf}>OK</button>
          
        </Inputs>
        <div id="listaCpf">
          <div id="inputsCep">
            <input type="text" value={cep[0]} />
            <input type="text" value={cep[1]} />
            <input type="text" value={cep[2]} />
            <input type="text" value={cep[3]} />
            <input type="text" value={cep[4]} />
            <button onClick={handleSearchCpf}>OK</button>
          </div>
          <div id="infoCep">
            
          </div>
        </div>
      </Result4>
      <Desafio4>
        <h1>Consultar CEP</h1>
        <p>Nesse desafio vamos consultar 5 ceps.</p>
        <img src={cep1} alt="" />
      </Desafio4>
    </ContainerTeste4>
  )
}

function setVeiculo(arg0: string) {
  throw new Error("Function not implemented.");
}

