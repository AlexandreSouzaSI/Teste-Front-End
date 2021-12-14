import { CepInfo, ContainerTeste4, Desafio4, Inputs, Result4 } from "./styles"

// @ts-ignore 
import cep1 from '../../assets/cep.png'
import { useState } from 'react';
import { BuscarCepService, DataJson } from '../../services/buscarCep';



export const Teste4 = () => {
  const [valor, setValor] = useState("")
  const [cep, setCep] = useState([])
  const [cepFinal, setCepFinal] = useState([])

  function handleAddCpf() {
    const copyCep = cep.slice()
    copyCep.push(valor)
    setCep(copyCep)
  }

  async function handleSearchCpf() {

    // const values = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ valor: cep }),
    //   withCredentials: true,
    //   credentials: "include",
    // };
    // // @ts-ignore
    // const response = await fetch("http://localhost:4000/test4", values);
    // const data = await response.json();
    // console.log(data)

    for(let i = 0; i < cep.length; i++){

      let val = cep[i];


      const options = {
          method: 'GET',
          mode: 'cors',
          cache: 'default'
      }
      fetch(`http://viacep.com.br/ws/${val}/json/`, options)
      .then(response => {response.json()
      .then( data => showData(data))
      })
      .catch(e => console.log("Deu erro: "+ e.message))
      
      const showData = (result) => {
              setCepFinal((state) => [...state, result])
        }

        setCep([])
    }
  }
  return (
    <ContainerTeste4>
      <Result4>
          <span>Informe 5 CEP´s para consulta</span>
        <Inputs>
          <input type="text" placeholder="Informe os CPF" onChange={(e) => setValor(e.target.value)}/>
          <button onClick={handleAddCpf}>OK</button>
          
        </Inputs>
        <div id="listaCep">
          <div id="inputsCep">
            <input type="text" value={cep[0]} />
            <input type="text" value={cep[1]} />
            <input type="text" value={cep[2]} />
            <input type="text" value={cep[3]} />
            <input type="text" value={cep[4]} />
            <button onClick={handleSearchCpf}>OK</button>
          </div>
          <div id="infoCep">
            {cepFinal.map(post => (
              <div id="informacoes" key={post.cep}>
                <label>Rua: </label>
                <CepInfo>{post.logradouro}</CepInfo>
                <label>Bairro: </label>
                <CepInfo>{post.bairro}</CepInfo>
                <label>Cidade: </label>
                <CepInfo>{post.localidade}</CepInfo>
                <label>UF: </label>
                <CepInfo>{post.uf}</CepInfo>
              </div>
            ))}
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

