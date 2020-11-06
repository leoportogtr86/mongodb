//deletando apenas 1 documento

db.instrumento.deleteOne({ nome: "guitarra" })


//deletar varios docs de uma vez
//n rodar ele vazio, pois vai apagar tudo!!!!!!!!!!!!!!!!!!!1 :(
db.instrumento.remove({ tipo: "cordas" })


//deletando apenas 1

db.instrumento.remove({ tipo: "cordas" }, 1)