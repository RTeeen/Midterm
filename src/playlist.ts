import Album from "./Album";
import Song from "./Song";

export default class Playlist{

    public playlistName:string;
    public playlistTracks:Song[] = [];

    constructor(playlistName:string){
        this.playlistName = playlistName;
    }

    addAlbum(album:Album):void{
        album.tracks.forEach((track)=>{
            this.playlistTracks.push(track);
        })
    }

}