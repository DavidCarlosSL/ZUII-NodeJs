"use strict"

const albumServices = require("../../src/services/album/album");
const axios = require("axios");

class populateAlbum{
    static async albumData(url){
        try{
            return await axios.get(url);
        }catch(err){
            throw err.message;
        }
    }

    static async getAlbum(url){
        try{
            const info = await this.albumData(url);
            let album = await albumServices.createAlbum(info.data.album.name, info.data.album.wiki.summary, info.data.album.tracks, info.data.album.tags, info.data.album.artist)
            if (album == 0) console.log("Artista " + info.data.album.artist + " não existe na base de dados");
            if (album == 1) console.log("Album " + info.data.album.name + " já existe na base de dados");
        }catch(err){
            throw err.message;
        }
    }
}

const albums = async () => {
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Journey&album=Infinity&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Journey&album=Escape&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Journey&album=Frontiers&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Journey&album=Evolution&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=AC/DC&album=Back%20In%20Black&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=AC/DC&album=Highway%20to%20Hell&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=AC/DC&album=High%20Voltage&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=AC/DC&album=Black%20Ice&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=AC/DC&album=Powerage&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Iron%20Maiden&album=The%20Book%20of%20Souls&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Iron%20Maiden&album=Piece%20of%20Mind&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Iron%20Maiden&album=The%20Number%20of%20the%20Beast&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Iron%20Maiden&album=Killers&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=KISS&album=Love%20Gun&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=KISS&album=Alive!&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=KISS&album=Lick%20it%20Up&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=KISS&album=Destroyer&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Black%20Sabbath&album=Master%20of%20Reality&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Black%20Sabbath&album=Heaven%20and%20Hell&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Black%20Sabbath&album=Paranoid&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Black%20Sabbath&album=Mob%20Rules&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Deep%20Purple&album=Fireball&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Deep%20Purple&album=Burn&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Deep%20Purple&album=Machine%20Head&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Deep%20Purple&album=Perfect%20Strangers&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Aerosmith&album=Nine%20Lives&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Aerosmith&album=Pump&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Aerosmith&album=Get%20a%20Grip&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Aerosmith&album=Rocks&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Foo%20Fighters&album=Concrete%20and%20Gold&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Foo%20Fighters&album=Wasting%20Light&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Foo%20Fighters&album=In%20Your%20Honor&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Foo%20Fighters&album=One%20By%20One&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Guns%20N'%20Roses&album=Appetite%20for%20Destruction&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Guns%20N'%20Roses&album=Greatest%20Hits&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Guns%20N'%20Roses&album=Chinese%20Democracy&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Led%20Zeppelin&album=Houses%20of%20the%20Holy&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Led%20Zeppelin&album=Led%20Zeppelin%20IV&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Led%20Zeppelin&album=Physical%20Graffiti&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Led%20Zeppelin&album=The%20Song%20Remains%20the%20Same&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Megadeth&album=Rust%20In%20Peace&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Megadeth&album=Dystopia&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Megadeth&album=Youthanasia&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Megadeth&album=Cryptic%20Writings&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Metallica&album=Metallica&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Metallica&album=...And%20Justice%20for%20All&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Metallica&album=Master%20Of%20Puppets&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Metallica&album=Kill%20'Em%20All&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Pink%20Floyd&album=The%20Wall&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Pink%20Floyd&album=The%20Division%20Bell&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Pink%20Floyd&album=Wish%20You%20Were%20Here&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Queen&album=Hot%20Space&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Queen&album=News%20of%20the%20World&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Queen&album=A%20Kind%20of%20Magic&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Scorpions&album=Blackout&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Scorpions&album=Virgin%20Killer&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Scorpions&album=Lovedrive&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Scorpions&album=Crazy%20World&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=The%20Beatles&album=Abbey%20Road&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=The%20Beatles&album=Help!&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=The%20Beatles&album=Revolver&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=The%20Beatles&album=Let%20it%20Be&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Creedence%20Clearwater%20Revival&album=Mardi%20Gras&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Creedence%20Clearwater%20Revival&album=Pendulum&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Creedence%20Clearwater%20Revival&album=Cosmo's%20Factory&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Pearl%20Jam&album=Ten&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Pearl%20Jam&album=Yield&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Pearl%20Jam&album=Vs.&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=The%20Police&album=Reggatta%20de%20Blanc&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=The%20Police&album=Ghost%20in%20the%20Machine&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=The%20Police&album=Outlandos%20d'Amour&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=The%20Police&album=Greatest%20Hits&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Foreigner&album=Inside%20Information&format=json");
    await populateAlbum.getAlbum("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=f77a82db7e8f7f0535fd3f53a3d97eed&artist=Foreigner&album=Complete%20Greatest%20Hits&format=json");
}


module.exports = {
    populateAlbum,
    albums
}