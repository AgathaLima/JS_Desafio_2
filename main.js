const servicos = [
  {
    nome: 'Consultoria UX',
    imagem: 'imagens/ilustra-ux.png',
    descricao: 'Consequatur debitis ipsa numquam illum placeat quoddeleniti.'
  },
  {
    nome: 'Marketing Digital',
    imagem: 'imagens/ilustra-marketing.png',
    descricao: ''
  },
  {
    nome: 'Desenvolvimento Web',
    imagem: 'imagens/ilustra-web.png',
    descricao: 'Consequatur debitis ipsa numquam illum placeat quoddeleniti.'
  }
]

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem('db_servicos')) ?? []

const setLocalStorage = dbServicos =>
  localStorage.setItem('db_servicos', JSON.stringify(dbServicos))

setLocalStorage(servicos)

// Read and Update

const readServicos = () => getLocalStorage()

const updateServicos = (index, servicos) => {
  const dbServicos = readServicos()
  dbServicos[index] = servicos
  setLocalStorage(dbServicos)
}

// Interação com o layout
const validaCampos = () => {
  return document.getElementById('form').reportValidity()
}

const salvaServico = () => {
  if (validaCampos()) {
    const servico = {
      nome: document.getElementById('nome').value,
      imagem: document.getElementById('imagem').value,
      descricao: document.getElementById('descricao').value
    }
  }
}

const criaRow = servico => {
  const novoRow = document.createElement('tr')
  novoRow.innerHTML = `
  <td>${servico.nome}</td>
  <td>
    <img src="${servico.imagem}" class="img-fluid" />
  </td>
  <td>
    ${servico.descricao}
  </td>
  <td>
    <button id="salvar" class="btn btn-secondary m-1">editar</button>
    <button class="btn btn-danger m-1">excluir</button>
  </td>
  `
}

const updateTabela = () => {
  const dbServicos = readServicos()
  dbServicos.forEach(servico => {
    criaRow(servico)
  })
}
