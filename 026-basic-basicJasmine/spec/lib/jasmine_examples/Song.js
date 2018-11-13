function Song(name, album, author) {
  this.name = name;
  this.album = album;
  this.author = author
}


Song.prototype.persistFavoriteStatus = function(value) {
  // something complicated
  throw new Error("not yet implemented");
};

Song.prototype.getDescrition = function(){
  return `The name of this song is ${this.name} and it is from the album ${this.album}. It is written by ${this.author}`
}

Song.prototype.isInSameAlbum = function(otherSong){
   return otherSong.album === this.album
}

module.exports = Song;
