import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  static defaultProps = {
    title: 'DEFAULT',
  }

  render() {
    return <div className="title-bar"><div className="wrapper"><h1>{this.props.title}</h1></div></div>;
  }
}
