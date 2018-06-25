import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import Player from './Player';

export default class PlayerList extends React.Component {
  static propTypes = {
    players: PropTypes.array.isRequired,
  }

  render() {
    return <FlipMove maintainContainerHeight="true">
      {this.props.players.map((player) => <Player key={player._id} player={player}/>)}
    </FlipMove>;
  }
}
