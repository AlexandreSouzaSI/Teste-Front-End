import { ContainerTeste3, Desafio3, Inputs, Result3, Salvar, TableCar } from "./styles"

// @ts-ignore 
import veiculo1 from '../../assets/veiculo.png'
import { useState } from 'react';

class Veiculo {
  id: number;
  Modelo?: string;
  Anofabricação?: string;
  Marca?: string;
  constructor(id: number, Modelo: string, Anofabricação: string, Marca: string){
    this.id = id;
    this.Marca = Marca;
    this.Anofabricação = Anofabricação;
    this.Modelo = Modelo
  }
}

class Carro extends Veiculo {
  QuantidadePortas?: string;
  constructor(id: number, Modelo: string, Anofabricação: string, Marca: string, QuantidadePortas: string){
    super(id, Modelo, Anofabricação, Marca)
    this.QuantidadePortas = QuantidadePortas
  }
}

class Moto extends Veiculo {
  Rodas?: string;
  QuantidadePassageiros?: string;
  constructor(id: number, Modelo: string, Anofabricação: string, Marca: string, QuantidadePassageiros: string, Rodas: string){
    super(id, Modelo, Anofabricação, Marca);
    this.QuantidadePassageiros = QuantidadePassageiros;
    this.Rodas = Rodas
  }
}


export const Teste3 = () => {
  const [veiculo, setVeiculo] = useState("car")
  const [moto, setMoto] = useState<Moto[]>([])
  const [car, setCar] = useState<Carro[]>([])
  const [modelo, setModelo] = useState("")
  const [idCarro, setIdCarro] = useState(2)
  const [idMoto, setIdMoto] = useState(1)
  const [anoFabricacao, setAnoFabricacao] = useState("")
  const [marca, setMarca] = useState("")
  const [rodas, setRodas] = useState("")
  const [passageiro, setPassageiro] = useState("")
  const [quantidadePortas, setQuantidadePortas] = useState("")
  
  async function handleSalvar() {

    if(veiculo === "car"){

      if(modelo === "" || anoFabricacao === "" || marca === "" || quantidadePortas === ""){
        return
      }

      setIdCarro(idCarro + 2)
      
      const newCarro = new Carro(idCarro, modelo, anoFabricacao, marca, quantidadePortas)
      setTimeout(() => {
        setModelo("")
        setAnoFabricacao("")
        setMarca("")
        setQuantidadePortas("")
      }, 2000)
      
      const values = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( newCarro ),
        withCredentials: true,
        credentials: "include",
      };
      // @ts-ignore
      const response = await fetch("http://localhost:4000/test3", values);
      const data = await response.json();
      console.log(data)
      setCar(data)


    } else if (veiculo !== "car"){

      if(modelo === "" || anoFabricacao === "" || marca === "" || rodas === "" || passageiro === ""){
        return
      }

      setIdMoto(idMoto + 2)

      const newMoto = new Moto(idMoto, modelo, anoFabricacao, marca, rodas, passageiro)
      setTimeout(() => {
        setModelo("")
        setAnoFabricacao("")
        setMarca("")
        setRodas("")
        setPassageiro("")
      }, 2000)

      const values = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( newMoto ),
        withCredentials: true,
        credentials: "include",
      };
      // @ts-ignore
      const response = await fetch("http://localhost:4000/test3", values);
      const data = await response.json();
      setMoto(data)
  }
  
}

  async function handleCar() {
    setVeiculo("car")

    const values = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      credentials: "include",
    };
    // @ts-ignore
    const response = await fetch("http://localhost:4000/test3", values);
    const data = await response.json();
    setCar(data)
    }

  async function handleMoto() {
    setVeiculo("moto")

    const values = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      credentials: "include",
    };
    // @ts-ignore
    const response = await fetch("http://localhost:4000/test3", values);
    const data = await response.json();
      setMoto(data)
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
          <div><label>Modelo: </label> <input type="text" placeholder="Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)}/></div>
          <div><label>Ano de fabricação: </label> <input type="text" placeholder="Ano fabricação" value={anoFabricacao} onChange={(e) => setAnoFabricacao(e.target.value)}/></div>
          <div><label>Quantidade de Portas: </label> <input type="text" placeholder="Portas" value={quantidadePortas} onChange={(e) => setQuantidadePortas(e.target.value)}/></div>
          <div><label>Marca: </label> <input type="text" placeholder="Marca" value={marca} onChange={(e) => setMarca(e.target.value)}/></div>
        </Inputs>
        : 
        <Inputs>
          <div><label>Modelo: </label> <input type="text" placeholder="Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)}/></div>
          <div><label>Ano de fabricação: </label> <input type="text" placeholder="Ano fabricação" value={anoFabricacao} onChange={(e) => setAnoFabricacao(e.target.value)} /></div>
          <div><label>Marca: </label> <input type="text" placeholder="Marca" value={marca} onChange={(e) => setMarca(e.target.value)}/></div>
          <div><label>Rodas: </label> <input type="text" placeholder="Rodas" value={rodas} onChange={(e) => setRodas(e.target.value)}/></div>
          <div><label>Passageiros: </label> <input type="text" placeholder="Passageiros" value={passageiro}  onChange={(e) => setPassageiro(e.target.value)}/></div>
        </Inputs>
        }

        <div>
        <Salvar id="salvar" onClick={handleSalvar}>Salvar</Salvar>
        </div>
        {veiculo === "car" ?
        <TableCar>
          <div id="cabecalho">
            <p>Modelo</p>
            <p>A.Fabricação</p>
            <p>Portas</p>
            <p>Marca</p>
          </div>
          {car.map(veiculo => (
          <div id="info" key={veiculo.id}>
              <p>{veiculo.Modelo}</p>
              <p>{veiculo.Anofabricação}</p>
              <p>{veiculo.QuantidadePortas}</p>
              <p>{veiculo.Marca}</p>
          </div>
          ))}
        </TableCar>
        :
        <TableCar>
          <div id="cabecalho">
            <p>Modelo</p>
            <p>A.Fabricação</p>
            <p>Marca</p>
            <p>Rodas</p>
            <p>Passageiros</p>
          </div>
          {moto.map(moto => (
            <div id="info" key={moto.id}>
              <p>{moto.Modelo}</p>
              <p>{moto.Anofabricação}</p>
              <p>{moto.Marca}</p>
              <p>{moto.Rodas}</p>
              <p>{moto.QuantidadePassageiros}</p>
            </div>
            ))}
        </TableCar>
        } 
      </Result3>
    </ContainerTeste3>
  )
}

