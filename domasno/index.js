const express = require("express");

const {
  getAllBooks,
  getOneBook,
  getSortedByName,
  getBookByAuthor,
  createBook,
  updateBook,
  removeBook,
} = require("./controllers/books");

require("./db/config");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.get("/books", getAllBooks);
app.get("/books/:id", getOneBook);
app.get("/books/sorted", getSortedByName);
app.get("/book/:author", getBookByAuthor);
app.post("/books", createBook);
app.put("/books/:id", updateBook);
app.delete("/books/:id", removeBook);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
