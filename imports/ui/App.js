import React from 'react';


import {Players, calcRank} from '../api/players';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* Those are comments */}
        <TitleBar title="React ROCKS!"/>
        <div className="wrapper">
          <PlayerList players={calcRank(Players.find({}, {sort: {score: -1}}).fetch())}/>
          <AddPlayer />
        </div>
      </div>
      );
  }
}
