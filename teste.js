// Inclusão parte - Ágatha



// JSON

const tempCliente = {
    nome: "lorem",
    imagem: "lorem",
    descricao: "lorem"
}

// Criação do localStorage

const getLocalStorage = () => JSON.parse(localStorage.getItem("db_client")) ?? []
const setLocalStorage = (db_cliente) => localStorage.setItem("db_client", JSON.stringify(db_cliente)) 



// Função CRUD - DELETE

const deleteCliente = (index) => {
    const db_cliente = readClient()
    db_cliente.splice(index, 1)
    setLocalStorage(db_cliente)
}


// Função CRUD - UPDATE

const updateClient = (index, cliente) => {
    const db_cliente = readClient()
    db_cliente[index] = cliente
    setLocalStorage(db_cliente)
} 


// Função CRUD - READ

const readClient = () => getLocalStorage()


// Função CRUD - CREATE

const createClien = (cliente) => {
    const db_cliente = getLocalStorage()
    db_cliente.push(cliente)
    setLocalStorage(db_cliente)
}  

const seFuncaoForValida = () => {
   return document.getElementById('form').reportValidity()
}

// Interaçãpo com a página

 const limparInput = () =>{
 const input = document.querySelectorAll('.input')
 input.forEach(input => input.value = "")
} 


const salvarCliente = () => {
    if (seFuncaoForValida ){
        const cliente = {
            nome: document.getElementById('nome').value,
            //img : colocar
            descricao: document.getElementById('descricao').value
        }
        createClien(cliente)
        limparInput()
    }
}
  
//  eventos e o forms

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

// Botão "salva ou cancelar dentro do form"

document.getElementById('salvar')
    .addEventListener('click', salvarCliente)

// document.getElementById('cancela')