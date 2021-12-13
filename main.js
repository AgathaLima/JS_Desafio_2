// Inclusão parte - Ágatha

// Botão "novo cliente"

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


document.getElementById('cancela')



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

const crearCurso = (cliente) => {
    const db_cliente = getLocalStorage()
    db_cliente.push(cliente)
    setLocalStorage(db_cliente)
}  









function adicionarJogos() {
  console.log("clicou");
  let img = document.getElementById("jogo").value;
  if (img.endsWith(".jpg") || img.endsWith(".png")) {
    listarJogosNaTela(img);
  }
}