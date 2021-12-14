import { ContainerTeste3, Desafio3, Inputs, Result3, Salvar, TableCar } from "./styles"

// @ts-ignore 
import veiculo1 from '../../assets/veiculo.png'
import { useState } from 'react';

class Veiculo {
  Tipo: string;
  Modelo?: string;
  Anofabricação?: string;
  Marca?: string;
  constructor(tipo: string, Modelo: string, Anofabricação: string, Marca: string){
    this.Tipo =tipo;
    this.Marca = Marca;
    this.Anofabricação = Anofabricação;
    this.Modelo = Modelo
  }
}

class Carro extends Veiculo {
  QuantidadePortas?: string;
  constructor(tipo: string, Modelo: string, Anofabricação: string, Marca: string, QuantidadePortas: string){
    super(tipo, Modelo, Anofabricação, Marca)
    this.Tipo = tipo;
    this.QuantidadePortas = QuantidadePortas
  }
}

class Moto extends Veiculo {
  Rodas?: string;
  QuantidadePassageiros?: string;
  constructor(tipo: string, Modelo: string, Anofabricação: string, Marca: string, QuantidadePassageiros: string, Rodas: string){
    super(tipo, Modelo, Anofabricação, Marca);
    this.QuantidadePassageiros = QuantidadePassageiros;
    this.Rodas = Rodas
  }
}


export const Teste3 = () => {
  const [veiculo, setVeiculo] = useState("car")
  const [moto, setMoto] = useState<Moto[]>([])
  const [car, setCar] = useState<Carro[]>([])
  const [tipo, setTipo] = useState("")
  const [modelo, setModelo] = useState("")
  const [anoFabricacao, setAnoFabricacao] = useState("")
  const [marca, setMarca] = useState("")
  const [rodas, setRodas] = useState("")
  const [passageiro, setPassageiro] = useState("")
  const [quantidadePortas, setQuantidadePortas] = useState("")
  
  async function handleSalvar() {

    if(veiculo === "car"){

      setTipo("Carro")
      const newCarro = new Carro(tipo ,modelo, anoFabricacao, marca, quantidadePortas)
      
      const values = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ veiculo: newCarro }),
        withCredentials: true,
        credentials: "include",
      };
      // @ts-ignore
      const response = await fetch("http://localhost:4000/test3", values);
      const data = await response.json();
      setCar(data)
      console.log(car)

    } else if (veiculo !== "car"){
      setTipo("Moto")
      const newMoto = new Moto(tipo, modelo, anoFabricacao, marca, rodas, passageiro)

      const values = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ veiculo: newMoto }),
        withCredentials: true,
        credentials: "include",
      };
      // @ts-ignore
      const response = await fetch("http://localhost:4000/test3", values);
      const data = await response.json();
      setMoto(data)
      console.log(moto)
  }
  
}

      
console.log(car)
console.log(moto)

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
          <div><label>Modelo: </label> <input type="text" placeholder="Informe o modelo" onChange={(e) => setModelo(e.target.value)}/></div>
          <div><label>Ano de fabricação: </label> <input type="text" placeholder="Informe o Ano de fabricação" onChange={(e) => setAnoFabricacao(e.target.value)}/></div>
          <div><label>Quantidade de Portas: </label> <input type="text" placeholder="Informe a quantidade de portas" onChange={(e) => setQuantidadePortas(e.target.value)}/></div>
          <div><label>Marca: </label> <input type="text" placeholder="Informe a marca" onChange={(e) => setMarca(e.target.value)}/></div>
        </Inputs>
        : 
        <Inputs>
          <div><label>Modelo: </label> <input type="text" placeholder="Informe o modelo" onChange={(e) => setModelo(e.target.value)}/></div>
          <div><label>Ano de fabricação: </label> <input type="text" placeholder="Informe o Ano de fabricação" onChange={(e) => setAnoFabricacao(e.target.value)} /></div>
          <div><label>Marca: </label> <input type="text" placeholder="Informe a marca" onChange={(e) => setMarca(e.target.value)}/></div>
          <div><label>Rodas: </label> <input type="text" onChange={(e) => setRodas(e.target.value)}/></div>
          <div><label>Passageiros: </label> <input type="text" placeholder="1 ou 2 passageiros"  onChange={(e) => setPassageiro(e.target.value)}/></div>
        </Inputs>
        }

        <div>
        <Salvar id="salvar" onClick={handleSalvar}>Salvar</Salvar>
        </div>

        {veiculo === "car" ?
        <TableCar>
          <div id="cabecalho">
            <p>Modelo</p>
            <p>Ano de Fabricação</p>
            <p>Portas</p>
            <p>Marca</p>
          </div>
          {/* {car.map(veiculo => (
          <div id="info" key="">
            <p>{veiculo.Modelo}</p>
            <p>{veiculo.Anofabricação}</p>
            <p>{veiculo.QuantidadePortas}</p>
            <p>{veiculo.Marca}</p>
          </div>
          ))} */}
        </TableCar>
        :
        <TableCar>
          <div id="cabecalho">
            <p>Modelo</p>
            <p>Ano de Fabricação</p>
            <p>Marca</p>
            <p>Rodas</p>
            <p>Passageiros</p>
          </div>
          <div id="info">
            <p>CB</p>
            <p>2008</p>
            <p>Honda</p>
            <p>2</p>
            <p>2</p>
          </div>
        </TableCar>
        } 
      </Result3>
    </ContainerTeste3>
  )
}

