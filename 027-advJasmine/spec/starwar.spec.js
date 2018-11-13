const starwar = require('../starwar')

describe('starwar',()=>{
    beforeEach(()=>{
        var fakeObiwan = new starwar.newJedi("Obiwan Kenobi",70,700);
        var fakeanakin = new starwar.newSith("Anakin Skywalker",100,1000);
        console.log(fakeanakin, fakeObiwan)
    })

    it('duel function should be call',()=>{
    })

})