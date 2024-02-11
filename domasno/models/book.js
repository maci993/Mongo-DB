const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  book: String,
  author: String,
  year: String,
  genre: String,
  language: String,
  country: String,
  pages: String,
  recomedation: String,
});

const Book = mongoose.model("Book", bookSchema, "books");

const create = async (data) => {
  const book = new Book(data);
  return await book.save();
};

const getById = async (id) => {
  return await Book.findOne({ _id: id });
};

const getByAuthor = async (author) => {
  return await Book.findOne({ author: author });
};

const getAllSortedByName = async () => {
  return await Book.find({}).sort({ book: 1 });
};

const getAll = async () => {
  return await Book.find({});
};

const update = async (id, data) => {
  return await Book.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return await Book.deleteOne({ _id: id });
};

module.exports = {
  create,
  getById,
  getByAuthor,
  getAllSortedByName,
  getAll,
  update,
  remove,
};
