import { Song } from "@prisma/client";


export const SongCard = (song: Song) => {
    return(
        <div key={song.id} className="flex song-card" onClick={() => window.open(song.url, "_blank")}>
            <img className="h-50 w-90" src={song.thumbnail}/>
            <p className="song-title w-90">{song.title}</p>
        </div>
        )
}
