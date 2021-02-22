import Artist from "./src/Artist";
import Album from "./src/Album";
import User from "./src/User";
import Song from "./src/Song";
import Playlist from "./src/playlist";
import LocalImporter from "./src/LocalImporter";
import CloudImporter from "./src/CloudImporter";
import PlaylistImporter from "./src/PlaylistImporter";

let artist = new Artist("Muse")
let album = new Album("The 2nd Law", artist, 2012)
let song = new Song("Madness")
album.addTrack(song)

let playlist = new Playlist("Fun Songs")
playlist.addAlbum(album);
let localfile = new LocalImporter();
let localPlaylistImporter = new PlaylistImporter(localfile);
let cloudfile = new CloudImporter();
let cloudPlaylistImporter = new PlaylistImporter(cloudfile);

let localPlaylist = localPlaylistImporter.importPlaylist()
let cloudPlaylist = cloudPlaylistImporter.importPlaylist()

let user = new User("ryan123", "password123");

user.addPlaylist(localPlaylist);
user.addPlaylist(cloudPlaylist);

console.log("Getting Playlist...")
user.getPlaylists();


console.log("Getting Albums...")
user.getAlbums();

console.log("Getting Songs...")
user.getSongs();