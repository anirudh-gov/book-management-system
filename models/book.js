const mongoose = require("mongoose");
const { title } = require("process");

const bookSchema = new mongoose.Schema({
    title : String,
    author : String,
    genre : String,
    price : Number,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
