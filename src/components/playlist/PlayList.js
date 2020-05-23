import React from 'react';
import './PlayList.css';
import TrackList from '../tracklist/TrackList';

class PlayList extends React.Component {

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={this.props.name} />
        <TrackList tracks={this.props.playlist} />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
export default PlayList;
