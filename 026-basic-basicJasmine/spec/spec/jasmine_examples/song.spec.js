describe('song', ()=>{
    var Song = require('../../lib/jasmine_examples/Song');
    var song;
    var song2;

    beforeEach(()=>{
        song = new Song('aaaaa','bbbbb','ccccc')
        song2 = new Song('11111','bbbbb','33333')
    })
    
    it("tells the current song if the user has made it a favorite", function() {
        spyOn(song, 'persistFavoriteStatus');
    
        player.play(song);
        player.makeFavorite();
    
        expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
    });

    it('this is new song name',()=>{
        expect(song.name).toEqual('aaaaa');

    })

    it('this is new song album',()=>{
        expect(song.album).toEqual('bbbbb');
    })

    it('this is new song author',()=>{
        expect(song.author).toEqual('ccccc');
    })

    it('this is new song description',()=>{
        expect(song.getDescrition()).toEqual(`The name of this song is aaaaa and it is from the album bbbbb. It is written by ccccc`);
    })

    it('it is from same album',()=>{
        console.log(song.isInSameAlbum)
        console.log(song2)
        expect(song.isInSameAlbum(song2)).toEqual(true);
    })

})
