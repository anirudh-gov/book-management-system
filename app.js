const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Book = require("./models/book.js");
const methodOverride = require("method-override");


app.set("views",path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main()
    .then(()=>{
        console.log("connection succesfull")
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Book_crud');
}


//root route
app.get("/", (req,res)=>{
    res.send("root is working Anirudh");
});

//home route
app.get("/books",async(req, res)=>{
    let books = await Book.find();
    //console.log(books);
    res.render("show.ejs",{books});
});

//Add new Book
app.post("/books",async(req, res)=>{
    let {title, author, genre, price} = req.body;
    //console.log(title);
    let newBook = new Book({
        title : title,
        author : author,
        genre : genre,
        price : price,
    });
    newBook
        .save()
        .then((data)=>{
            console.log("Book was added");
        })
        .catch((err)=>{
            console.log(err);
        })
    res.redirect("/books");
});

//delete book
app.delete("/books/:id",async(req,res)=>{
    let {id} = req.params;
    let deletedBook = await Book.findByIdAndDelete(id);
    console.log(deletedBook);
    res.redirect("/books");
})



app.listen(8080, ()=>{
    console.log("Listening on port 8080");
});