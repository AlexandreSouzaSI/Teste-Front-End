import { ContainerTeste3, Desafio3, Inputs, Result3, TableCar } from "./styles"

// @ts-ignore 
import veiculo1 from '../../assets/veiculo.png'
import { useState } from 'react';


interface Veiculo {
  Modelo: string;
  Anofabricação: Date;
  QuantidadePortas: number;
  Marca: string;
}

interface Moto extends Veiculo {
    Rodas: number;
    Passageiros: number;
}
  
  
export const Teste3 = () => {
  const [veiculo, setVeiculo] = useState("car")

  function handleCar() {
    setVeiculo("car")
  }
  function handleMoto() {
    setVeiculo("moto")
  }

  return (
    <ContainerTeste3>
      <Desafio3>
        <h1>Veículos</h1>
        <p>Nesse desafio você tera que informar as caracteristicas do seu veiculo.</p>
        <img src={veiculo1} alt="" />
      </Desafio3>
      <Result3>
        <div id="carOrMoto">
          <button id="car" onClick={handleCar}>Carro</button>
          <button id="moto" onClick={handleMoto}>Moto</button>
        </div>
        {veiculo === "car" ? 
        <Inputs>
          <div><label>Modelo: </label> <input type="text" placeholder="Informe o modelo" /></div>
          <div><label>Ano de fabricação: </label> <input type="text" placeholder="Informe o Ano de fabricação" /></div>
          <div><label>Quantidade de Portas: </label> <input type="text" placeholder="Informe a quantidade de portas" /></div>
          <div><label>Marca: </label> <input type="text" placeholder="Informe a marca" /></div>
        </Inputs>
        : 
        <Inputs>
          <div><label>Modelo: </label> <input type="text" placeholder="Informe o modelo" /></div>
          <div><label>Ano de fabricação: </label> <input type="text" placeholder="Informe o Ano de fabricação" /></div>
          <div><label>Quantidade de Portas: </label> <input type="text" placeholder="Informe a quantidade de portas" /></div>
          <div><label>Marca: </label> <input type="text" placeholder="Informe a marca" /></div>
          <div><label>Rodas: </label> <input type="text" value="2"/></div>
          <div><label>Passageiros: </label> <input type="text" placeholder="1 ou 2 passageiros" /></div>
        </Inputs>
        }

        {veiculo === "car" ?
        <TableCar>
          <div id="cabecalho">
            <p>Modelo</p>
            <p>Ano de Fabricação</p>
            <p>Portas</p>
            <p>Marca</p>
          </div>
          <div id="info">
            <p>Vectra</p>
            <p>2008</p>
            <p>4</p>
            <p>Chevrolet</p>
          </div>
        </TableCar>
        :
        <TableCar>
          <div id="cabecalho">
            <p>Modelo</p>
            <p>Ano de Fabricação</p>
            <p>Portas</p>
            <p>Marca</p>
            <p>Rodas</p>
            <p>Passageiros</p>
          </div>
          <div id="info">
            <p>Vectra</p>
            <p>2008</p>
            <p>4</p>
            <p>Chevrolet</p>
            <p>2</p>
            <p>2</p>
          </div>
        </TableCar>
        } 
      </Result3>
    </ContainerTeste3>
  )
}

function setVeiculo(arg0: string) {
  throw new Error("Function not implemented.");
}

