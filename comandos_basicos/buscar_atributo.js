//para saber se algum atributo existe ou nao em dada collection

db.musicas.find({ ano_lancamento: { $existst: true } })