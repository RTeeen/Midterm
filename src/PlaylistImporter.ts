import { Importable } from "./Importable";

export default class PlaylistImporter{

    constructor(Importer:Importable,path:string){
        this.importPlaylist(Importer, path);
    }

    importPlaylist(Importer:Importable,path:string){
        Importer.loadPlaylist(path);
    }
}