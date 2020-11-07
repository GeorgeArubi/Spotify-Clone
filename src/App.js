import React, { useEffect } from 'react';
import './App.css';
import Login from './Login.js';
import { getTokenFromUrl } from './spotify';
import SpotifyWebAPI from "spotify-web-api-js";
import Player from './Player.js';
import { useDataLayerValue } from './DataLayer.js';

const spotify = new SpotifyWebAPI();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcGqcysnwBdii').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, [ token, dispatch]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify}/> : <Login />}
    </div>
  );
}

export default App;