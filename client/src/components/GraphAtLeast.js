import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { LineChart, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const dummyData = [
  {name: '1 Imp', uv: 4000, pv: 3800},
  {name: '2 Imp', uv: 5000, pv: 3800},
  {name: '3 Imp', uv: 2000, pv: 1900},
  {name: '4 Imp', uv: 2780, pv: 2600},
  {name: '5 Imp', uv: 1890, pv: 1750},
  {name: '6 Imp', uv: 2390, pv: 2200},
  {name: '7 Imp', uv: 3490, pv: 3400},
];

class GraphAtLeast extends Component {
  // state = { uniqueVisitors: 10000, impressions: 1000000, pageViews: 5000000 };
 //componentDidMount

 //componentWillReceiveProps
  stats = () => {
    const { stats } = this.props;
  }

  render() {
    // let { stats } = this.state;

    console.log(`graphprecise-pageviews ${this.props.pageViews}`);
    console.log(`graphprecise-impressions ${this.props.impressions}`);
    console.log(`graphprecise-unique-visitors ${this.props.uniqueVisitors}`);

    let pageViews = this.props.pageViews;
    let uniqueVisitors = this.props.uniqueVisitors;
    let impressions = this.props.impressions;
    let pov = (impressions / pageViews); // percentage of views
    let avg = 0;

    if (isNaN(avg)){
      avg = 0;
    } else {
      avg = pageViews / uniqueVisitors;
    }
    // onClick={ roll !== 0 ? () => this.updateScore(name) : f => f }
    let upper = Math.ceil(avg); // upper (likely) extent for margin of error
    let lower = Math.floor(avg); // lower (likely) extent for margin of error

    console.log("--------vvvvv------");
    console.log(`avg: ${avg}`);
    console.log(`isNan?: ${isNaN(avg)}`);
    console.log(`upper: ${upper}`);
    console.log(`lower: ${lower}`);
    console.log("--------^^^^^--------");
    let upperPoint = 0;
    let lowerPoint = 0;
    let chart2Data = [];

    function fact(num) {
      if (num == Infinity || num == "Infinity")
        return 0
      else if (num == "NaN" || isNaN(num))
        return 0
      else if (num < 0)
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
      upperPoint = parseFloat( (fact(upper)/(fact(i)*fact(upper-i))) * Math.pow(pov, i) * Math.pow((1-pov), (upper-i)) );
      lowerPoint = parseFloat( (fact(lower)/(fact(i)*fact(lower-i))) * Math.pow(pov, i) * Math.pow((1-pov), (lower-i)) );

      if(isNaN(upperPoint)) upperPoint = 0;
      if(isNaN(lowerPoint)) lowerPoint = 0;

      let rangeArray = [upperPoint, lowerPoint];
      let chartObject = {'name': i, 'range': rangeArray};
      chart2Data.push(chartObject);
    }
    console.log(`Dummy Data: ${JSON.stringify(dummyData)}`);
    console.log(`Chart 2 Data: ${JSON.stringify(chart2Data)}`);

    return(
      <Container>
        <h1>Graph "At Least" Component</h1>
        <AreaChart width={600} height={300} data={chart2Data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Area type="monotone" dataKey="range" stroke="#8884d8" activeDot={{r: 8}}/>
          {/* <ComposedDataDecorator dataKey="range" /> */}

        </AreaChart>
        {/* { stats && <Button fluid basic onClick={this.clearFilter}>Clear Filter</Button> } */}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    impressions: state.stats.impressions,
    pageViews: state.stats.pageViews,
    uniqueVisitors: state.stats.uniqueVisitors
  }
}

export default connect(mapStateToProps)(GraphAtLeast);
