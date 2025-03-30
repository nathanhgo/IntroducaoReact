//JSX - Javascript com superpoderes (escrever html)

import { useRef, useState } from "react"; // sem default
import ItemLista from "./ItemLista"; // com default

function App() { // componente
  // const listaMercado = ["Banana", "Maçã", "Carne"];
  // listaMercado =[]

  const [listaMercado, setListaMercado] = useState([])
  // setListaMercado([])

  const inputAdicionar = useRef()


  // Hook
  // useState - Cria variável de estado (faz o react re-renderizar a página quando a var muda)
    // ele não retorna uma informação
    // Ele retorna um array [Var. que armazena info., func p/ alterar var.]


    const adicionarElementosNaLista = () => {
      
      const novaLista = [...listaMercado]
      const valorInput = inputAdicionar.current.value;


      if (valorInput) {

        novaLista.push(valorInput)
        setListaMercado(novaLista)

      }

      inputAdicionar.current.value = ''

    }

  return <div className="max-w-96 w-full  flex flex-col items-center gap-4">
    <h1 className="text-3xl font-bold">Lista de Mercado</h1>

    <div className="w-full flex gap-2">
      <input className="w-full border border-gray-600 rounded-md px-2" ref={inputAdicionar} type="text" placeholder="Digite um item"/>
      <button className="rounded-md bg-gray-800 text-white px-2 cursor-pointer hover:bg-gray-600 transition" onClick = {() => {adicionarElementosNaLista()}}>Adicionar</button>
    </div>

    {listaMercado.length > 0 ? <ul className="w-full flex flex-col gap-2">
        {listaMercado.map((item, index) => {
          return <ItemLista key={index} itemLista={item} listaMercado = {listaMercado} setListaMercado = {setListaMercado}/>
        })}
      </ul> : <p>Você não tem nenhum elemento na sua lista</p>}
  
  </div>;  //tag vazia = fragment

}

export default App
