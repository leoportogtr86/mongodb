//traz todos os dados inseridoa na collection
db.test.find()

//traz os dados com uma organizaçao visual maior
db.test.find().pretty()


//buscando o primeiro registro
db.test.findOne()



//refinando a busca, neste caso, buscando por tipo de instrumento
db.instrumento.find({ tipo: "cordas" })