const axios = require('axios');
const { response } = require('express');

const viaCepMiddleware = async (req, res, next) => {
    const { cep } = req.body.adress;


if (!cep) {
    return res.status(400).send({error: "CEP é obrigatório."});
}

try {
    const response = await 
axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    if (response.data.erro) {
        return res.status(400).send({ error: "CEP inválido"})
    }


    const {logradouro: street, bairro: neighborhood, localidade: city, uf: state} = response.data;
    req.body.adress = { cep, street, neighborhood, city, state}

    next()
} catch (error) {
    res.status(500).send({ error: "Erro ao buscar o CEP"})
}
}

module.exports = viaCepMiddleware
