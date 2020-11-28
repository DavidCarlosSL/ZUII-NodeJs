"use strict"

const artistServices = require("../../src/services/artist/artist");
const axios = require("axios");

class PopulateArtist{
    static async artistData(url){
        try{
            return await axios.get(url);
        }catch(err){
            throw err.message;
        }
    }

    static async getArtist(url){
        try{
            const info = await this.artistData(url);
            let artist = await artistServices.createArtist(info.data.artist.name, info.data.artist.bio.summary, info.data.artist.tags);
            if (artist == 1)  return console.log("Artista " + info.data.artist.name + " já existe na base de dados");

        }catch(err){
            throw err.message;
        }
    }
}

const artists = async() => {
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=AC/DC&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Aerosmith&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Black%20Sabbath&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Deep%20Purple&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Foo%20Fighters&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Guns%20N'%20Roses&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Iron%20Maiden&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Journey&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=KISS&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Led%20Zeppelin&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Megadeth&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Metallica&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Pink%20Floyd&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Queen&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Scorpions&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=The%20Beatles&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Creedence%20Clearwater%20Revival&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Pearl%20Jam&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=The%20Animals&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=The%20Police&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
    await PopulateArtist.getArtist("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Foreigner&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&format=json");
}

module.exports = {
    PopulateArtist,
    artists
}
