//atualizando dados com update
//o primeiro par de chaves trata do dado que queremos alterar
//o segundo, os dados que queremos inserir e substituir
db.test.update({ nome: "Cebolinha" }, { nome: "Cebola", idade: 11 })