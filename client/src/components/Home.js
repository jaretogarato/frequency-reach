import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';


class Home extends Component {

}

const mapStateToProps = (state) => {
  const panels = state.panels;
  const statuses = [ ...new Set(panels.map(panel => panel.status))]
  return { panels, statuses };
}

export default connect(mapStateToProps)(Home);
