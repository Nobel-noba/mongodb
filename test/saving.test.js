// mocha is actualy used for the teesting of whether the CRUD operation is done or note

const assert= require('assert');
const MarioChar= require('../models/mariocar');



// Describe test
describe('Saving Records',function(){

    // create testss
    it('Saves a record to database',function(done){
        var char= new MarioChar({
            name:'mario',
            weight:16
    });

        char.save().then(function(){
            assert(char.isNew===false);
            done();
        });
    });
    
    //next test

});
