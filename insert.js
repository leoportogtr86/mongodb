const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cod3r', { useNewUrlParser: true, useUnifiedTopology: true });


let Funcionario = mongoose.model('funcionario', {

    id: Number,
    nome: String,
    sobrenome: String,
    email: String,
    genero: String,
    cidade: String,
    pais: String,
    empresa: String,
    salario: Number

})

let funcionario = new Funcionario({

    id: 501,
    nome: "Davi",
    sobrenome: "Porto",
    email: "@davi.porto",
    genero: "M",
    cidade: "João Pessoa",
    pais: "Brasil",
    empresa: "portotech",
    salario: 25000


})

funcionario.save().then((res) => {

    console.log('dados salvos')

}).catch((err) => {

    console.log(err)

})