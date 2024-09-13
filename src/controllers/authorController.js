const Author = require('../models/author')

exports.createAuthor = async (req, res) => {
    try {
        const author = new Author(req.body);
        await author.save();
        res.status(201).send(author);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.getAuthors = async (req, res) => {z
    try {
        const authors = await Author.find()
        res.send(authors); 
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.uptadeAuthor = async (req, res) => {
    try {
        const author = await 
        Author.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.send(author);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.deleteAuthor = async (req, res) => {
    try {
        await Author.findByIdAndDelete(req.params.id);
        res.send({message: 'Autor Deletado com Sucesso.'})
    } catch (error) {
        res.status(500).send(error)
    }
}