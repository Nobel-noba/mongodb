// mocha is actualy used for the teesting of whether the CRUD operation is done or note

const assert= require('assert');
const MarioChar= require('../models/mariocar');



// Describe test
describe('Finding Records',function(){

    var char;

    beforeEach(function(done){
        char= new MarioChar({
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
    it('Finds a record from the database',function(done){
        MarioChar.findOne({_id:char._id}).then(function(result){
            assert(result._id.toString()===char._id.toString());
            done();
        });

    });
    
    //next test

});