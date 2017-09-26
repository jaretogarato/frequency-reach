import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
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
  state = { uniqueVisitors: 10000, impressions: 1000000, pageViews: 5000000 };

 //componentDidMount

 //componentWillReceiveProps
  // stats = () => {
  //   const { stats } = this.props;
  // }

  render() {
     let { stats } = this.props;

    console.log(`graphprecise-pageviews ${stats.pageViews}`);
    console.log(`graphprecise-impressions ${stats.impressions}`);
    console.log(`graphprecise-unique-visitors ${stats.uniqueVisitors}`);

    let page_views = this.props.stats.pageViews;
    let unique_visitors = this.props.stats.impressions;
    let impressions = this.props.stats.uniqueVisitors;
    let pov = (impressions / page_views); // percentage of views
    let avg = (page_views / unique_visitors); // views per avg visitor
    let upper = Math.ceil(avg); // upper (likely) extent for margin of error
    let lower = Math.floor(avg); // lower (likely) extent for margin of error
    console.log(avg);
    console.log(upper);
    console.log(lower);
    console.log("---------------------");
    let upperPoint = 0;
    let lowerPoint = 0;
    let chartData = [];

    function fact(num) {
      if (num < 0)
        return -1;
      else if (num == 0)
        return 1;
      else {
        return (num * fact(num - 1));
      }
    }

    let i = 0;
    for (i = 0; i < 15; i++) {
      // fact(lower)/(fact(i)*fact(lower-i)))*pov^i*(1-pov)^(lower-i)
      upperPoint = fact(upper)/(fact(i)*fact(upper-i)) * Math.pow(pov, i) * Math.pow((1-pov), (upper-i));
      lowerPoint = fact(lower)/(fact(i)*fact(lower-i)) * Math.pow(pov, i) * Math.pow((1-pov), (lower-i));
      // chartData[i] = [`name: ${i} Imp, uv: ${upperPoint}, pv: ${lowerPoint}`]
      chartData.push({name: `${i} Imp`, uv: `${upperPoint}`, pv: `${lowerPoint}` });
    }
    //console.log(`Precise Data: ${JSON.stringify(preciseData)}`);
    //console.log(`Chart Data: ${JSON.stringify(chartData)}`);
    // console.log(`In Graph Precise ${JSON.stringify(this.props.stats)}`);


    return(
      <Container>
        <h1>Graph Precise Component</h1>
        {/* <LineChart width={600} height={300} data={preciseData} */}
        <LineChart width={600} height={300} data={chartData}
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
    )
  }
}

const mapStateToProps = (state) => {
  const stats = state.stats;
  // const stats = [ ...new Set(stats.map(stat => stat.value))]
  return { stats };
}

export default connect(mapStateToProps)(GraphPrecise);
