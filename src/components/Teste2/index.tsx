import { ContainerTeste2, Desafio2, Informacao, InfoValores, Inputs, Resposta2, Result2, Valores } from "./styles"

// @ts-ignore 
import caixa from '../../assets/caixa.png'
import { useState } from "react"


export const Teste2 = () => {
  const [valor1, setValor1] = useState("")
  const [valor2, setValor2] = useState("")
  const [result, setResult] = useState(0)
  const [troco, setTroco] = useState([])
  const [erro, setErro] = useState("")

  async function HandleResult() {

    setResult(Number(valor2) - Number(valor1))    
    const values = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ valorCompra: valor1, valorPago: valor2 }),
      withCredentials: true,
      credentials: "include",
    };
    // @ts-ignore
    const response = await fetch("http://localhost:4000/test2", values);
    const data = await response.json();
    if(typeof data === "string"){
      setErro(data)
      setTroco([])
    } else {
      setTroco(data)
      setErro("")
    }
  }

  return (
    <ContainerTeste2>
      <Result2>
        <span>Vamos fazer uma compra, por favor, informe o valor da compra, e o valor que esta pagando, para que possamos saber o troco.</span>
      <Inputs>
          <input type="text" placeholder="Valor da compra" onChange={(e) => setValor1(e.target.value)}/>
          <input type="text" placeholder="Valor pago" onChange={(e) => setValor2(e.target.value)}/>
        </Inputs>
        <Inputs>
          <button onClick={HandleResult}>Resultado</button>
        </Inputs>
        <Informacao fontSize={22} width={1050} textAlign={"center"} marginTop={20} marginBottom={-20} color={"red"}>{erro}</Informacao>
        <Resposta2>
            <InfoValores>
              <Informacao>Valor da compra</Informacao> <Valores>- R$ {valor1},00</Valores>
            </InfoValores>

            <InfoValores>
              <Informacao>Valor pago</Informacao> <Valores> R$ {valor2},00</Valores>
            </InfoValores>

            <InfoValores>
              <Informacao>Valor do troco</Informacao> <Valores> R$ {result},00</Valores>
            </InfoValores>

            <h2>Voce recebera seu troco da seguinte forma</h2>

            <InfoValores>
              <Informacao>Notas de R$100,00:</Informacao> <Valores>{troco[0]} </Valores>
            </InfoValores>

            <InfoValores>
              <Informacao>Notas de R$10,00:</Informacao> <Valores> {troco[1]} </Valores>
            </InfoValores>

            <InfoValores>
              <Informacao>Notas de R$1,00:</Informacao> <Valores> {troco[2]} </Valores>
            </InfoValores>
        </Resposta2>
        </Result2>
      <Desafio2>
        <h1>Compras</h1>
        <p>Nesse desafio você tera que informar o valor da compra, e o valor que esta pagando no caixa.</p>
        <img src={caixa} alt="" />
      </Desafio2>
    </ContainerTeste2>
  )
}