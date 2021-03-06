// mocha is actualy used for the teesting of whether the CRUD operation is done or note

const assert= require('assert');
const MarioChar= require('../models/mariocar');



// Describe test
describe('Updating Record',function(){

    var char;

    beforeEach(function(done){
        char= new MarioChar({
            name:'mario',
            waight:16
        });

        char.save().then(function(){
            done();
        });
    });

    // create tests
    it('Updates a record in the database',function(done){
            MarioChar.findOneAndUpdate({name:'mario'},{name:'Luiji'}).then(function(){
                MarioChar.findOne({_id:char._id}).then(function(result){
                    assert(result.name==='Luiji');
                    done();
                });
            });
        });
    it('Increament the weight by 1',function(done){
        MarioChar.update({},{$inc:{weight:+1}}).then(function(){
            MarioChar.findOne({name:'mario'}).then(function(record){
                assert(record.weight===1);
                done();
            });
        });
    });
    //next test

});