import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';
import store from '../store.js';

import initialState from '../initialState';
import Lyrics from '../components/Lyrics.js';
import { setLyrics } from '../action-creators/lyrics.js';


 export default class LyricsContainer extends Component {
   constructor (props){
     super(props);
     this.state = Object.assign(
       {songQuery: "", artistQuery: ""},
        store.getState());
      this.setArtist = this.setArtist.bind(this);
      this.setSong = this.setSong.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

    componentDidMount() {
      this.unsubscribe = store.subscribe( () => {
      this.setState(store.getState());
     });
   }

   componentWillUnmount() {
     this.unsubscribe();
   }

   setArtist(artist){
    this.setState({artistQuery: artist});
   }

   setSong(song){
    this.setState({songQuery: song});
   }

   handleSubmit (event){
    const artist = this.state.artistQuery;
    const song = this.state.songQuery;

    axios.get(`/api/lyrics/${artist}/${song}`)
      .then( res => {
        console.log("res is: ", res.data);
        const setLyricsAction = setLyrics(res.data.lyric);
        store.dispatch(setLyricsAction);
      });
   }

   render(){
     return(
       <div>
         <h1>Lyrics Container</h1>
         <Lyrics
          handleSubmit={this.handleSubmit}
          setArtist={this.setArtist}
          setSong={this.setSong}
          artistQuery={this.state.artistQuery}
          songQuery={this.state.songQuery}
          text={this.state.text}
         />
      </div>
     );
   }

 }
