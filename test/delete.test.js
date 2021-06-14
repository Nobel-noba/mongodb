// mocha is actualy used for the teesting of whether the CRUD operation is done or note

const assert= require('assert');
const MarioChar= require('../models/mariocar');



// Describe test
describe('Deleting Record',function(){

    var char;

    beforeEach(function(done){
        char= new MarioChar({
            name:'mario',
            weight:16
        });

        char.save().then(function(){
            done();
        });
    });

    // create tests
    it('delete a record from the database',function(done){
        MarioChar.findOneAndRemove({
            name:'mario'
        }).then(function(){
            MarioChar.findOne({name:'mario'}).then(function(result){
                assert(result===null);
                done();
            });
        });

    });
    
    //next test

});