export const BuscarCepService = {
 
  BuscarCep({ cep }) {
    for(let i = 0; i < cep.length; i++){

          let val = cep[i];
    
          console.log(cep)
    
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
            for(const campo in result){
              console.log(campo)
            }
          }
        }
}
}
