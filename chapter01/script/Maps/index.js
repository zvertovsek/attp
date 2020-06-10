"use strict";
var Genre;
(function (Genre) {
    Genre[Genre["Rock"] = 0] = "Rock";
    Genre[Genre["CountryAndWestern"] = 1] = "CountryAndWestern";
    Genre[Genre["Classical"] = 2] = "Classical";
    Genre[Genre["Pop"] = 3] = "Pop";
    Genre[Genre["HeavyMetal"] = 4] = "HeavyMetal";
})(Genre || (Genre = {}));
class MusicCollection {
    constructor() {
        this.collection = new Map();
    }
    Add(genre, artists) {
        for (let artist of artists) {
            this.AddArtist(genre, artist);
        }
    }
    AddArtist(genre, artist) {
        if (!this.collection.has(genre)) {
            this.collection.set(genre, []);
        }
        let artists = this.collection.get(genre);
        if (artists) {
            artists.push(artist);
        }
    }
    Get(genre) {
        return this.collection.get(genre);
    }
}
let collection = new MusicCollection();
collection.Add(Genre.Classical, ['Debussy', 'Bach', 'Elgar']);
collection.Add(Genre.CountryAndWestern, ['Dolly Parton']);
collection.Add(Genre.HeavyMetal, ['Metallica', 'Sepultura']);
collection.Add(Genre.Pop, ['Madonna', 'Michael Jackson']);
//# sourceMappingURL=index.js.map