//atualizando dados com update
//o primeiro par de chaves trata do dado que queremos alterar
//o segundo, os dados que queremos inserir e substituir
db.test.update({ nome: "Cebolinha" }, { nome: "Cebola", idade: 11 })


//outra alternativa

db.test.update({ nome: "Cebola" }, { $set: { nome: "Cebolão" } })

//atualizando multiplos registros que atendam uma condicao. Usamos o "multi: 1 (ou true)"
//por padrao, o mongo so altera o primeiro registro que atender certa condicao
db.test.update({ nome: "Leo" }, { $set: { nome: "Leonardo" } }, { multi: 1 })