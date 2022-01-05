

// Criação do localStorage

const getLocalStorage = () => JSON.parse(localStorage.getItem("db_servico")) ?? []
const setLocalStorage = (db_servico) => localStorage.setItem("db_servico", JSON.stringify(db_servico)) 



// Função CRUD - DELETE

const deleteServico = (index) => {
    const db_servico = lerServico()
    db_servico.splice(index, 1)
    setLocalStorage(db_servico)
}


// Função CRUD - UPDATE

const updateServico = (index, servico) => {
    const db_servico = lerServico()
    db_servico[index] = servico
    setLocalStorage(db_servico)
} 


// Função CRUD - READ

const lerServico = () => getLocalStorage()


// Função CRUD - CREATE

const criarServico = (servico) => {
    const db_servico = getLocalStorage()
    db_servico.push(servico)
    setLocalStorage(db_servico)
}  

const seFuncaoForValida = () => {
   return document.getElementById('form').reportValidity()
}

// Interação com a página

 const limparInput = () =>{
 const input = document.querySelectorAll('.input')
 input.forEach(input => input.value = "")
} 


const salvarServico = () => {
    if (seFuncaoForValida ){
        const servico = {
            nome: document.getElementById('nome').value,
            img : document.getElementById('img').value,
            descricao: document.getElementById('descricao').value
        }
        const index = document.getElementById('nome').dataset.index
        if (index == 'new'){
        criarServico(servico)
        //limparInput()
        updateTabela()
        fecharModal()
        } else {
            updateServico(index, servico)
            updateTabela()
            fecharModal()
            
        }
    }

} 
const criarLinha = (servico, index) => {
    const novaLinha = document.createElement('tr')
    novaLinha.innerHTML =`
            <td>${servico.nome}</td>
            <td><img src="${servico.img}"></td>
            <td>${servico.descricao}</td>
            <td>
                <button class="btn btn-secondary m-1" id="editar-${index}">editar</button>
                <button class="btn btn-danger m-1" id="deletar-${index}">excluir</button>
            </td>
    `
    document.querySelector('#dados_tabela>tbody').appendChild(novaLinha)
}

const limparTabela = () =>{
    const linhas = document.querySelectorAll('#dados_tabela>tbody tr')
    linhas.forEach(linha => linha.parentNode.removeChild(linha))
}

const updateTabela = () => {
    const db_servico = lerServico()
    limparTabela()
    db_servico.forEach(criarLinha)
}

/// *** MEXI ANALU ****

// const editaServico = index => {
//     const servico = readServicos()[index]
//     servico.index = index
//     preencheCampos(servico)
//   }

const preencherCampos = (servico) => {
    document.getElementById('nome').value = servico.nome
    document.getElementById('img').value = servico.img
    document.getElementById('descricao').value = servico.descricao
    document.getElementById('nome').dataset.index = servico.index
}

const editarServico = (index) => {
    const servico = lerServico()[index]
    servico.index = index
    preencherCampos(servico)
    abrirModal()
    
}

const editarDeletar = (event) =>{
    if(event.target.type === 'submit') {
        const [acao, index] = event.target.id.split('-')
        if (acao == 'editar') {
            editarServico(index)
        }else {
            const servico = lerServico(index)
            const confirme = window.confirm(`Deseja realmente excluir o curso ?`)
            if (confirme){
                deleteServico(index)
                updateTabela()
                
            } 
            
          }
        
    }
       
    }

updateTabela()

  
//  eventos e o forms

const abrirModal = () => document.getElementById('modal')
    .classList.add('active')

const fecharModal = () => {
    limparInput()
    document.getElementById('modal')
    .classList.remove('active')
    
}



document.getElementById('cadastrarCliente')
    .addEventListener('click', abrirModal)

document.getElementById('modalClose')
    .addEventListener('click', fecharModal)

// Botão "salva ou cancelar dentro do form"

document.getElementById('salvar')
    .addEventListener('click', salvarServico)


document.getElementById('cancelar')
.addEventListener('click', fecharModal)

document.querySelector('#dados_tabela>tbody')
.addEventListener('click', editarDeletar)
// Read and Update

// const lerServico = () => getLocalStorage()

// const updateServico = (index, servico) => {
//   const db_Servico = lerServico()
//   db_Servico[index] = servico
//   setLocalStorage(db_Servico)
// }



