//deletando apenas 1 documento

db.instrumento.deleteOne({ nome: "guitarra" })


//deletar varios docs de uma vez

db.instrumento.remove({ tipo: "cordas" })