function Library(name, creator) {
  if(!name || !creator) {
    console.log(`Name and creator inputs are required.`);
    return;
  }
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist(name) {
  if (!name) {
    console.log(`Name is required!`);
    return;
  }
  this.name = name;
  this.tracks = [];
  this.overallRating = function() {
    let ratings = this.tracks.map((track) => {
      return track.rating;
    })
    let average = ratings.reduce((a, b) => {
      return Math.round((a + b) / ratings.length);
    })
    return average;
  }
  this.totalDuration = function() {
    let duration = this.tracks.map((track) => {
      return track.duration;
    })
    let sum = duration.reduce((a, b) => {
      return (a + b);
    })
    return `${sum} seconds`;
  }
}

function Track(title, rating, duration) {
  if (!title || !rating || !duration) {
    console.log(`Title, rating, and duration are required.`);
    return;
  } else if (rating >= 1 && rating <= 5) {
    console.log(`Rating must be between or equal to 1 and 5.`)
    return;
  }
  this.title = title;
  this.rating = null;
  this.duration = duration;
}

function addTrack(track, playlist) {
  playlist.tracks.push(track);
}

function removeTrack(track, playlist) {
  playlist.tracks.filter(!track);
}

let Library1 = new Library('Library1', 'Bert');
let Library2 = new Library('Library2', 'Bart');
let Library3 = new Library('Library3', 'Burt');

let Playlist1 = new Playlist('Playlist1');
let Playlist2 = new Playlist('Playlist2');
let Playlist3 = new Playlist('Playlist3');

let Track1 = new Track('Track1', 5, 120);
let Track2 = new Track('Track2', 1, 186);
let Track3 = new Track('Track3', 3, 175);
let Track4 = new Track('Track4', 2, 193);
let Track5 = new Track('Track5', 4, 275);
let Track6 = new Track('Track6', 4, 243);
let Track7 = new Track('Track7', 2, 264);

addTrack(Track1, Playlist1);
addTrack(Track3, Playlist1);
addTrack(Track5, Playlist1);
addTrack(Track7, Playlist2);
addTrack(Track2, Playlist2);
addTrack(Track1, Playlist3);
addTrack(Track3, Playlist3);


// console.log(Library1);
console.log(Playlist1.totalDuration());
// console.log(Track1);