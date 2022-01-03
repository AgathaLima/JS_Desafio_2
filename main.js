const servicos = [
  {
    nome: 'Consultoria UX',
    imagem: 'imagens/ilustra-ux.png',
    descricao: 'Consequatur debitis ipsa numquam illum placeat quoddeleniti.'
  },
  {
    nome: 'Marketing Digital',
    imagem: 'imagens/ilustra-marketing.png',
    descricao: 'Consequatur debitis ipsa numquam illum placeat quoddeleniti.'
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

  const index = document.getElementById('nome').dataset.index
  if (index == 'novo') {
    // necessário chamar as funcoes de criação aqui
    console.log('criar')
  } else {
    updateServicos(index, servicos)
    // chamar modal aqui
  }
}

const criaRow = (servico, index) => {
  const novoRow = document.createElement('tr')
  novoRow.innerHTML = `
  <td>${servico.nome}</td>
  <td><img src="${servico.imagem}" class="img-fluid" /></td>
  <td>${servico.descricao}</td>
  <td>
    <button class="btn btn-secondary m-1" id="editar${index}">Editar</button>
    <button class="btn btn-danger m-1">excluir</button>
  </td>
  `
  document.querySelector('#tabelaServicos>tbody').appendChild(novoRow)
}

const limpaTabela = () => {
  const rows = document.querySelectorAll('#tabelaServicos>tbody tr')
  rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTabela = () => {
  const dbServicos = readServicos()
  limpaTabela()
  dbServicos.forEach(criaRow)
}

const preencheCampos = servicos => {
  document.getElementById('nome').value = servicos.nome
  document.getElementById('imagem').value = servicos.imagem
  document.getElementById('descricao').value = servicos.descricao
  document.getElementById('nome').dataset.index = servicos.index
}

const editaServico = index => {
  const servico = readServicos()[index]
  servico.index = index
  preencheCampos(servico)
}

const editar = event => {
  if (event.target.type == 'button') {
    const [action, index] = event.target.id.splite('-')
    if (action == 'editar') {
      editaServico(index)
    }
  }
}

updateTabela()

document
  .querySelector('#tabelaServicos>tbody')
  .addEventListener('click', editar)
