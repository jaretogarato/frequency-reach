import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const preciseData = [
  {name: '1 Imp', uv: 4000, pv: 3800},
  {name: '2 Imp', uv: 5000, pv: 3800},
  {name: '3 Imp', uv: 2000, pv: 1900},
  {name: '4 Imp', uv: 2780, pv: 2600},
  {name: '5 Imp', uv: 1890, pv: 1750},
  {name: '6 Imp', uv: 2390, pv: 2200},
  {name: '7 Imp', uv: 3490, pv: 3400},
];

class GraphPrecise extends Component {
  state = { unique_visitors: 0, impressions: 0, page_views: 0 }

  stats = () => {
    const { stats } = this.props;
  }

  render() {
    let { stats } = this.state;
    return(
      <Container>
        <h1>Graph Precise Component</h1>
        <LineChart width={600} height={300} data={preciseData}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        {/* { stats && <Button fluid basic onClick={this.clearFilter}>Clear Filter</Button> } */}
      </Container>
      // why is it that sometimes we have to enclose js in curly brackets? moreover, when?
    )
  }
}

const mapStateToProps = (state) => {
  const stats = state.stats;
  // const stats = [ ...new Set(stats.map(stat => stat.value))]
  return { stats };
}

export default connect(mapStateToProps)(GraphPrecise);
