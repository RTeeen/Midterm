import Album from "./Album";
import Playlist from "./playlist";

export default class User{

    public _username: string;
    private _password:string;
    public playlists: Playlist[]= [];
    public albums: Album[] =[];

    constructor(username:string, password:string){
        this._username = username;
        this._password = password;
    }

    addPlaylist(playlist:Playlist){
        this.playlists.push(playlist);
    }

    addAlbum(Album:Album){
        this.albums.push(Album);
    }

    getAlbum(){
        let counter = 1;
        this.albums.forEach((album)=>{
            console.log(`${counter}) ${album.title}\n`);
            counter++;
        })
    }
    getPlaylist(){
        let counter = 1;
        this.playlists.forEach((playlist)=>{
            console.log(`${counter}) ${playlist.playlistTracks}\n`);
            counter++;
        })
    }

    getSongs(){
        let counter = 1;
        this.albums.forEach((album)=>{
            album.tracks.forEach((track)=>{
                console.log(`${counter}) ${track}\n`);
                counter++;
            })
        })
    }

}