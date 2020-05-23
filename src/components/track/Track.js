import React from 'react';

import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(e) {
    e.preventDefault();
    this.props.onAdd(this.props.track);
  }
  removeTrack(e) {
    e.preventDefault();
    this.props.onRemove(this.props.track);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onClick={(e) => this.removeTrack(e)}>
          -
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={(e) => this.addTrack(e)}>
          +
        </button>
      );
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}
export default Track;
