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

// Função CRUD - CREATE

const createClien = (cliente) => {
    const db_cliente = getLocalStorage()
    db_cliente.push(cliente)
    setLocalStorage(db_cliente)
}  


// Interação com a página

const saveClient = () => {
    if (validarCliente){
        console.log("Cadastrando cliente")
    }
}

