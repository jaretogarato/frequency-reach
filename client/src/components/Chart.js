import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Divider, Header, Image, Container, Table, Button } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class Chart extends Component {
  state = { unique_visitors: 0, impressions: 0, page_views: 0 }
  stats = () => {
    const { stats } = this.props;
  }

  render() {
    let { stats } = this.state;
    return(
      <Container>
        <h1>Chart Component</h1>
        <table>
          <tbody>
            <tr>
              <td>Chart 1a</td>
              <td>Chart 1b</td>
            </tr>
            <tr>
              <td>Chart 2a</td>
              <td>Chart 2b</td>
            </tr>
          </tbody>
        </table>
        {/* { stats && <Button fluid basic onClick={this.clearFilter}>Clear Filter</Button> } */}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const stats = state.stats;
  // const stats = [ ...new Set(stats.map(stat => stat.value))]
  return { stats };
}

export default connect(mapStateToProps)(Chart);
