import React from 'react';
import './TrackList.css';
import Track from '../track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks &&
          this.props.tracks.map((track, index) => (
            <Track
              track={track}
              key={track.id}
              onAdd={this.props.onAdd}    
              onRemove={this.props.onRemove}   
              isRemoval={this.props.isRemoval}       
            />
          ))}
      </div>
    );
  }
}
export default TrackList;
