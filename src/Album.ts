import Artist from "./Artist";
import Song from "./Song";

export default class Album{

    public title:string;
    public artist: Artist;
    public releaseYear:number;
    public tracks:Song[] = [];

    constructor(title:string, artist:Artist, releaseYear:number){
        this.title = title;
        this.artist = artist;
        this.releaseYear = releaseYear;
    }

    addTrack(trackName:Song){
        this.tracks.push(trackName);
    }
}