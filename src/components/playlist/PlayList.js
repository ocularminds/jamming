import React from 'react';
import './PlayList.css';
import TrackList from '../tracklist/TrackList';

class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
      e.preventDefault();
      this.props.onNameChange(e.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={this.props.name} onChange={e => this.handleNameChange(e)}/>
        <TrackList
          tracks={this.props.playlist}
          onAdd={this.props.onAdd}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <button className="Playlist-save" onClick={e => this.props.onSave(e)}>SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
export default PlayList;
