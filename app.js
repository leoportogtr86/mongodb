const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });


const Pessoa = mongoose.model('Pessoa', {

    nome: String,
    idade: Number

})

let pessoa = new Pessoa({ nome: 'Davi Porto', idade: 4 })

pessoa.save().then(() => {

    console.log('dados salvos')
})