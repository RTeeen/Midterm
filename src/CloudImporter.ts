import { question } from "readline-sync";
import { Importable } from "./Importable";

export default class CloudImporter implements Importable{
    
    public URL:string;
    public musicList:string[] = [];

    constructor(){
        this.URL = question("Please enter the URL to your playlist: ");
        this.loadPlaylist(this.URL);
    }

    loadPlaylist(URL:string){
        console.log(`Importing the tracks from ${URL}...`);
        this.musicList = ["ZEZE", "YOSEMITE", "Krippy Kush", "Rock Bottom", "Lemonade"];
        let counter = 1;
        this.musicList.forEach((music)=>{
            console.log(`${counter}) ${music}`);
            counter++;
        })
    }
    
    }