//Definindo arquivo principal da aplicação

//Importando listas de livros
const { listBooksOne, listBooksTwo } = require('./data')

//Importando função de junção de listas
const mergeList = require('./mergeList')


console.log("===> MergeLits Algorithm <===")
console.log("Lista 1", listBooksOne)
console.log("Lista 2", listBooksTwo)
console.log("Lista junta: ", mergeList(listBooksOne, listBooksTwo, 'preco'))