import React, { Component } from 'react';
import { Header, Container, Grid, Image } from 'semantic-ui-react';
import Home from './components/Home';
import Chart from './components/Chart';
import NoMatch from './components/NoMatch';
import Form from './components/Form';
import GraphPrecise from './components/GraphPrecise';
import GraphAtLeast from './components/GraphAtLeast';

import 'semantic-ui-css/semantic.min.css';
import logo from './logo.png';
import './App.css';

import { ResponsiveContainer, BarChart, Bar, Cell, Text, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const points = () => {
  let page_views = 5000000;
  let unique_visitors = 700000;
  let impressions = 1000000;
  let pov = impressions / page_views; // percentage of views;

  // do the math
  // stick numbers in an array
  // let the graphs have access to the numbers
}

class GridExampleDividedNumber extends Component {

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
                <Form />
              </Grid.Column>
              <Grid.Column>
                <GraphPrecise />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Chart />
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

export default GridExampleDividedNumber;
