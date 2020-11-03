//busca usando o operador "ou" dentro do filtro

db.musicas.find({ $or: [{ titulo: "titulo1" }, { titulo: "titulo2" }] })