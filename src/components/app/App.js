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
        {
          id: '1',
          name: 'Glow',
          artist: 'Peter White',
          album: 'Glow',
          uri: 'http.1',
        },
        {
          id: '2',
          name: 'Simple Yes Or No',
          artist: 'Lagbaja',
          album: 'Me',
          uri: 'http.2',
        },
        {
          id: '3',
          name: 'Tutu',
          artist: 'Miles Davis',
          album: 'Tutu',
          uri: 'http.3',
        },
        {
          id: '4',
          name: 'Jehova',
          artist: 'Agbola Shadare',
          album: 'Glory',
          uri: 'http.4',
        },
        {
          id: '5',
          name: 'Slam',
          artist: 'Marvins Sapp',
          album: 'Marvins',
          uri: 'http.5',
        },
      ],
      searchResults: [],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    var tracks = this.state.playlistTracks;
    const exists = tracks.some((e) => e.id === track.id);
    if (!exists) {
      tracks.push(track);
    }
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    var tracks = this.state.playlistTracks;
    const results = tracks.filter((e) => e.id !== track.id);
    this.setState({playlistTracks: results});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist(e) {
    e.preventDefault();
    const {playlistName, playlistTracks} = this.state;
    const trackURIs = playlistTracks.map((track) => track.uri);
    console.log('Playlist ', playlistName, ' ', trackURIs);
  }

  search(searchTerm) {
    console.log('searching for: ', searchTerm);
    var results = [];
    const size = Math.ceil(Math.random() * 20);
    for(var x = 0; x < size; x++){
       results.push({
         id: `${x+6}`,
         name: `Song ${x+1}`,
         artist: `Rand man ${x+1}`,
         album: `Album ${x+1}`,
         uri: `http.${x+6}`
       });
    }
    console.log(JSON.stringify(results));
    this.setState({searchResults: results});
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <PlayList
              name={this.state.playlistName}
              playlist={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
