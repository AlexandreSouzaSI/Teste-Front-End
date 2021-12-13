import { ContainerTeste4, Desafio4, Inputs, Result4 } from "./styles"

// @ts-ignore 
import cep1 from '../../assets/cep.png'
import { useState } from 'react';

export const Teste4 = () => {
  const [valor, setValor] = useState("")
  const [cep, setCep] = useState([])
  const [cepFinal, setCepFinal] = useState([])

  function handleAddCpf() {
    // @ts-ignore 
    cep.push(valor)
  }

  async function handleSearchCpf() {
    for(let i = 0; i < cep.length; i++){

      let val = cep[i];

      const options = {
          method: 'GET',
          mode: 'cors',
          cache: 'default'
      }
      // @ts-ignore 
      fetch(`http://viacep.com.br/ws/${val}/json/`, options)
      .then(response => {response.json()
          .then(data => setCepFinal(data))
      })
      .catch(e => console.log('Deu erro: '+ e.message))
  }
  }
  console.log(cepFinal)
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
            {/* {cepFinal.map((post) => (
              // @ts-ignore 
            <div key={post.cep}>
              <label>Rua: {post.logradouro}</label>
              <label>Bairro: {post.bairro}</label>
              <label>Cidade: {post.localidade}</label>
              <label>Estado: {post.uf}</label>
            </div> 
            ))} */}
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

