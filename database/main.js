const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb+srv://lalalal:12343004194@cluster0.poody.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("Connected to the database!")
    }catch (e) {
        console.log(e)
    }
};

connect();