import React from 'react';
import './VideoFooter.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";

function VideoFooter({channel, description, song}) {
    
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
            <h3>@{channel}</h3>
            <p> {description}</p>
            <div className = "videoFooter_ticker"></div>
            <MusicNoteIcon />
            <Ticker mode="smooth">
                {

                    ({ index }) =>(
                        <>
                        <h1>{song}</h1>
                        </>
                    )
                }
            </Ticker>

            </div>
            <img className="videoFooter_record"src="https://static.thenounproject.com/png/934821-200.png" alt=""/>
        </div>
    )
}

export default VideoFooter
