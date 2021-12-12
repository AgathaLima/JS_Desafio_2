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


// Interaçãpo com a página

const saveClient = () => {
    if (validarCliente){
        console.log("Cadastrando cliente")
    }
}

// fatal incluir os eventos e o forms