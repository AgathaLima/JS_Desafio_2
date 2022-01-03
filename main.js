// Adicionando parte - Gustavo

// Função CRUD -  Delete

const deleteCurso = (index) => {
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient) 
}

