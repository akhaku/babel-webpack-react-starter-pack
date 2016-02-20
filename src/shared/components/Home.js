/* eslint-env browser,node */
import React from 'react';

export default class Home extends React.Component {
  componentDidMount() {
    require('./Home.less');
  }

  render() {
    return (
      <div className="Component-Home">
        {'Hello World'}
      </div>
    );
  }
}
