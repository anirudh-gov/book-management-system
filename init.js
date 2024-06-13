const mongoose = require("mongoose");
const Book = require("./models/book.js");

main()
    .then(()=>{
        console.log("connection succesfull")
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Book_crud');
}

let allBooks = [
    {
        "title": "The Hidden Realm",
        "author": "Jane Doe",
        "genre": "Fantasy",
        "price": 19.99
    },
    {
        "title": "Whispers of the Past",
        "author": "John Smith",
        "genre": "Mystery",
        "price": 14.95
    },
    {
        "title": "Journey to the Stars",
        "author": "Alice Johnson",
        "genre": "Science Fiction",
        "price": 22.50
    },
    {
        "title": "Love in the Time of Chaos",
        "author": "Emily Brown",
        "genre": "Romance",
        "price": 12.99
    },
    {
        "title": "The Economics of Tomorrow",
        "author": "Michael Green",
        "genre": "Non-fiction",
        "price": 29.99
    },
]

Book.insertMany(allBooks);