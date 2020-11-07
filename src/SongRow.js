import React from 'react'
import './SongRow.css'

function SongRow({ track }) {
    return (
        <div className="songColumn">
            <div className="column">
                <div className="songTitle">
                    <img className="songTitle__album" src={track.album.images[0].url} alt=""/>
                    <div className="songTitle__info">
                        <h1>{track.name}</h1>
                        <p>{track.artists.map((artist) => artist.name)}</p>
                    </div>
                </div>
             </div>
            <div className="column">
                <div className="trackAlbum">
                    <p>{track.album.name}</p>
                </div>
            </div>
            <div className="column">
                <div className="trackDuration">
                    <p>
                    {Math.floor(track.duration_ms / 60000) + ":" + 
                    (((track.duration_ms % 60000) / 1000).toFixed(0) < 10 ? '0' : '') + 
                    ((track.duration_ms % 60000) / 1000).toFixed(0)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SongRow
