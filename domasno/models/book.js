const mongoose = require("mongoose");

const librarySchema = mongoose.Schema({
  book: String,
  author: String,
  year: String,
  genre: String,
  language: String,
  country: String,
  pages: String,
  recomedation: String,
});

const Library = mongoose.model("Library", librarySchema, "libraries");

const create = async (data) => {
  const book = new Library(data);
  return await book.save();
};

const getById = async (id) => {
  return await Library.findOne({ _id: id });
};

const getByAuthor = async (author) => {
  return await Library.findOne({ author: author });
};

const getAllSortedByName = async () => {
  return await Library.find({}).sort({ book: 1 });
};

const getAll = async () => {
  return await Library.find({});
};

const update = async (id, data) => {
  return await Library.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return await Library.deleteOne({ _id: id });
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
