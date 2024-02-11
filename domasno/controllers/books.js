const {
  getAll,
  getAllSortedByName,
  getById,
  getByAuthor,
  create,
  remove,
} = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const books = await getAll();
    res.status(200).send(books);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error!");
  }
};

const getSortedByName = async (req, res) => {
  try {
    const sortedBooks = await getAllSortedByName();
    res.status(200).send(sortedBooks);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error!");
  }
};

const getOneBook = async (req, res) => {
  try {
    const book = await getById(req.params.id);
    res.status(200).send(book);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error!");
  }
};

const getBookByAuthor = async (req, res) => {
  try {
    const book = await getByAuthor(req.params.author);
    res.status(200).send(book);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error!");
  }
};

const createBook = async (req, res) => {
  try {
    await create(req.body);
    res.status(201).send("Book created!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error!");
  }
};

const updateBook = async (req, res) => {
  try {
    await updateBook(req.params.id, req.body);
    res.status(204).send(`Book updated: ${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error!");
  }
};

const removeBook = async (req, res) => {
  try {
    await remove(req.params.id);
    res.status(204).send(`Book deleted : ${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error!");
  }
};

module.exports = {
  getAllBooks,
  getSortedByName,
  getOneBook,
  getBookByAuthor,
  createBook,
  updateBook,
  removeBook,
};
