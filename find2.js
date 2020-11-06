const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cod3r', { useNewUrlParser: true, useUnifiedTopology: true });


let Funcionario = mongoose.model('funcionario', {

    id: Number,
    nome: String,
    sobrenome: String,
    email: String,
    genero: String,
    cidade: String,
    empresa: String,
    salario: Number

})

//refinando a busca, procurando pessoas do Canada

Funcionario.find({ pais: "Canada" }, (err, docs) => {

    console.log(docs)
})