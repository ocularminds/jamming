import React from 'react';

import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.renderAction = this.renderAction.bind(this);
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
        <button className="Track-action">{this.renderAction()}</button>
      </div>
    );
  }

  renderAction() {
    var content = this.props.isRemoval ? '-' : '+';
    return <button className="Track-action">{content}</button>;
  }
}
export default Track;
