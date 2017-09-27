import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
// import Home from './components/Home';
import Chart from './components/Chart';
// import NoMatch from './components/NoMatch';
import Form from './components/Form';
import GraphPrecise from './components/GraphPrecise';
import GraphAtLeast from './components/GraphAtLeast';

import 'semantic-ui-css/semantic.min.css';
import logo from './logo.png';
import './App.css';

// import { ResponsiveContainer, BarChart, Bar, Cell, Text, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class TopView extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Frequency / Reach Modeler</h2>
        </div>

        <Container>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Form />  {/* form  */}
              </Grid.Column>
              <Grid.Column>
                <GraphPrecise /> {/* precise graph  */}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Chart /> {/* chart  */}
                <h1>Chart goes here</h1>
              </Grid.Column>
              <Grid.Column>
                <GraphAtLeast />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default TopView;
