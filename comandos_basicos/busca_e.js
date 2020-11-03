//busca usando o operador and

db.musicas.find({ $and: [{ titulo: "Back in Black" }, { artista: "ACDC" }] })