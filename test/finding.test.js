// mocha is actualy used for the teesting of whether the CRUD operation is done or note

const assert= require('assert');
const MarioChar= require('../models/mariocar');



// Describe test
describe('Finding Records',function(){

    beforeEach(function(done){
        var char= new MarioChar({
            name:'mario',
            waight:16
        });

        char.save().then(function(){
            assert(char.isNew===false);
            done();
        });
    });

    // create tests
    it('Finds a record from the database',function(done){
        MarioChar.findOne({name:'mario'}).then(function(result){
            assert(result.name==="mario");
            done();
        });

    });
    
    //next test

});