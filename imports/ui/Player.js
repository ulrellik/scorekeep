import React from 'react';
import PropTypes from 'prop-types';

import {Players} from '../api/players';

export default class Player extends React.Component {
  static propTypes = {
    player: PropTypes.object.isRequired,
  }

  render() {
    let playerClass = `item item--position-${this.props.player.rank} player`
    return <div className={playerClass}>
      <div>
        <h3 className="player__name">{this.props.player.name}</h3>
        <p className="player__stats">{this.props.player.position} has score {this.props.player.score}</p>
      </div>
      <div className="player__actions">
        <button className="button button--round" onClick={(e) => Players.update(this.props.player._id, {
            $inc: {
              score: -1
            }
          })}>-</button>
        <button className="button button--round" onClick={(e) => Players.update(this.props.player._id, {
            $inc: {
              score: 1
            }
          })}>+</button>
        <button className="button button--round" onClick={(e) => Players.remove(this.props.player._id)}>X</button>
      </div>
    </div>
  }
}
