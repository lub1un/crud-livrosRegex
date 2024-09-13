const Book = require('../models/book')

exports.createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).send(book);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find().populate('author');
        res.send(books); 
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.uptadeBook = async (req, res) => {
    try {
        const books = await 
        Book.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.send(book);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.send({message: 'Livro Deletado com Sucesso.'})
    } catch (error) {
        res.status(500).send(error)
    }
}