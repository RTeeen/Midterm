import fs from "fs";
import { question } from "readline-sync";
import { Importable } from "./Importable";


export default class LocalImporter implements Importable{

    private _playlistPath:string = "";
    public musicList:string[] = [];

    constructor(){
        this._playlistPath = question("Please enter the URL to your playlist: ");
        this.loadPlaylist(this._playlistPath);
    }

    loadPlaylist(path:string){
        console.log(`Importing the tracks from ${path}...`);
        let json = JSON.parse(fs.readFileSync("../Playlist.json", {encoding:"utf-8"}));
        this.musicList = json.musics;
        let counter = 1;
        this.musicList.forEach((music)=>{
            console.log(`${counter}) ${music}`);
            counter++;
        })
    }

}