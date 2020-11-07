import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import ShuffleIcon from "@material-ui/icons/Shuffle"
import RepeatIcon from "@material-ui/icons/Repeat"
import { Grid, Slider } from "@material-ui/core"
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay"
import VolumeDownIcon  from "@material-ui/icons/VolumeDown"

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img 
                className="footer__albumLogo"
                src="https://media.pitchfork.com/photos/5ce5675d93a53605e31ee058/1:1/w_600/Santi_MandyAndTheJungle.jpg" 
                alt=""/>
                <div className="footer__songInfo">
                    <h4>Sparky</h4>
                    <p>Cruel Santino</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__icon" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__icon" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                    <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                    <Slider />
                </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
