//selecionando os atributos que virao ou nao na busca
// 1 => true
// 0 => false
db.musicas.find({}, { titulo: 1, _id: 0 })