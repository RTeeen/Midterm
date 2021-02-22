export default class Artist{

    public name:string;
    public albums: string[] = [];
    public songs:string[] = [];

    constructor(artistName:string){
        this.name = artistName;
    }

    addAlbum(albumName:string){
        this.albums.push(albumName);
    }
    addSong(songName:string){
        this.songs.push(songName);
    }
}