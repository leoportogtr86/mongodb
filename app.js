const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

//criacao do model (classe/collection) Pessoa
const Pessoa = mongoose.model('Pessoa', {

    nome: String,
    idade: Number

})


//uma instancia do modelo pessoa
let pessoa = new Pessoa({ nome: 'Davi Porto', idade: 4 })


//salvando os dados
pessoa.save().then(() => {

    console.log('dados salvos')
})