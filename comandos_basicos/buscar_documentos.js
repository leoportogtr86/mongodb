//traz todos os dados inseridoa na collection
db.test.find()

//traz os dados com uma organizaçao visual maior
db.test.find().pretty()


//buscando o primeiro registro
db.test.findOne()



//refinando a busca, neste caso, buscando por tipo de instrumento
db.instrumento.find({ tipo: "cordas" })


//selecionando o que deve ser mostrado na busca, 0 => nao mostra o campo, 1 => mostra o campo
db.instrumento.find({ tipo: "percussao" }, { tipo: 0 })
db.instrumento.find({ tipo: "cordas" }, { nome: 0 })