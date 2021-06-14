const mongoose=require("mongoose");

// ES6 Promise

mongoose.Promise=global.Promise;

// connect to db befor test run
before(function(done){

    // connect to mongoose

    mongoose.connect('mongodb://localhost/testaroo');
    mongoose.connection.once('open',function(){
        console.log("connection is successful");
        done();
    }).on('error',function(error){
        console.log("connection error".error);

    });
});

// do this befor every single test (it drops the collection)

beforeEach(function(done){
    // drop the collection
    mongoose.connection.collections.mariocars.drop(function(){
        done();
    });
});