import { Importable } from "./Importable";

export default class PlaylistImporter{

    constructor(Importer:Importable){
        this.importPlaylist(Importer);
    }

    importPlaylist(Importer:Importable){
        Importer.loadPlaylist();
    }
}