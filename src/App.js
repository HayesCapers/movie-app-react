import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Poster from './Poster.js'

class App extends Component {
    constructor(props) {
        super(props);
        // in order to define a state variable we put it in the constructor.
        // we define it as an oject on this.state
        // this replaces getInitialState()
        // this.state will initialize state 
        this.state = {
            moviePosters: []
        }
    }

    // componentDidMount runs after the first render
    componentDidMount() {
        // console.log("I'm in the dom");
        var url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5'
        $.getJSON(url,(movieData)=>{
            // console.log(movieData);
            // changing state will cause render to run again
            // NEVER CHANGE STATE YOURSELF!!
            // ALWAYS USE SET STATE (you dont serve yourself at the bar... you ask the bartender)
            this.setState({
                moviePosters: movieData.results
            });
        });
    }  

    render() {
        var postersArray = [];
        // First time through render, this will be an empty Array
        // Second time through (after componentDidMount), it won't be empty
        this.state.moviePosters.map((poster,index)=>{
            // console.log(poster);
            postersArray.push(<Poster poster={poster} key={index} />);
        });

        return (
            <div className="App">

                <h1>This is a movie app(again....)</h1>
                {postersArray}
                
            </div>
        );
    }
}

export default App;
