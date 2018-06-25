import React from 'react';

import {Players} from '../api/players';

export default class AddPlayer extends React.Component {
  constructor(props) {
    super(props);
    // https://daveceddia.com/avoid-bind-when-passing-props/
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    Players.insert({name: event.target.playername.value, score: 0});
  }

  render() {
    return (<form className="item form" onSubmit={this.handleSubmit.bind(this)}>
      <input className="form__input" type="text" name="playername" placeholder="Player Name"/>
      <button className="button">Add player</button>
    </form>);
  }
}
