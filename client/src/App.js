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
  let avg = page_views / unique_visitors;
  let lower = avg;
  let upper = avg;

  function fact(x) {
    if(x==0) {
      return 1;
    }
    return x * fact(x-1);
  }

  // function run(number) {
  //   alert(fact(parseInt(number, 10)));
  // }

  // { fact(20) }

  // do the math
  // lower
  // iterate 15 times, using i as index
  // =(FACT(D10)/(FACT(D16)*FACT(D10-D16)))*G9^D16*(1-G9)^(D10-D16)
  // simple
  // Math.pow(7, 2);    // 49
  let i = 0;
  for (i = 0; i < 20; i++) {
    // fact(lower)/(fact(i)*fact(lower-i)))*pov^i*(1-pov)^(lower-i)
    fact(lower)/(fact(i)*fact(lower-i)) * Math.pow(pov, i) * Math.pow((1-pov), (lower-i));
  }


  // upper

  // stick numbers in an array
  // let the graphs have access to the numbers
}

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
              </Grid.Column>
              <Grid.Column>
                <GraphAtLeast /> {/* at-least graph  */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default TopView;
