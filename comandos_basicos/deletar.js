//deletando apenas 1 documento

db.instrumento.deleteOne({ nome: "guitarra" })


//deletar varios docs de uma vez
//n rodar ele vazio, pois vai apagar tudo :(
db.instrumento.remove({ tipo: "cordas" })