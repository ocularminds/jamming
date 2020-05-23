import React from 'react';
import './App.css';
import SearchBar from '../searchbar/SearchBar';
import SearchResults from '../searchresults/SearchResults';
import PlayList from '../playlist/PlayList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: 'Cool Jazz',
      playlistTracks: [
        {name: 'Glow', artist: 'Peter White', album: 'Glow'},
        {name: 'Simple Yes Or No', artist: 'Lagbaja', album: 'Me'},
        {name: 'Tutu', artist: 'Miles Davis', album: 'Tutu'},
      ],
      searchResults: [],
    };
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <PlayList
              name={this.state.playlistName}
              playlist={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
