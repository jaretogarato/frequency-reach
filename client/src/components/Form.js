import React from 'react';
import { connect } from 'react-redux';
import { updateStats } from '../actions/stats';

// page_views impressions unique_visitors

class Form extends React.Component {
  state = { pageViews: 5000000, uniqueVisitors: 800000, impressions: 1100000 }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => this.test());
    // this.props.dispatch(updateStats(e.target.name, e.target.value))
    // this.props.dispatch({type: 'UPDATE_STATS', name: e.target.name, value: e.target.value })
    // Update page views, impressions, and unique visitors

    e.preventDefault();
    // // get name from input
    //   let { pageViews, impressions, uniqueVisitors } = this.state;
    //   //
    //   let { dispatch, id } = this.props;
    //   let stats = { pageViews: parseInt(pageViews), impressions: parseInt(impressions), uniqueVisitors: parseInt(uniqueVisitors) };
    // //  console.log(JSON.stringify(stats))
    //   //
    //   // // update Redux store (( using a reducer ))
    //   dispatch({type: 'UPDATE_STATS', stats: stats})
  }

  test = () => {
    let { pageViews, impressions, uniqueVisitors } = this.state;
    let { dispatch, id } = this.props;
    let stats = { pageViews: parseInt(pageViews), impressions: parseInt(impressions), uniqueVisitors: parseInt(uniqueVisitors) };
    // console.log(JSON.stringify(stats))
    // update Redux store (( using a reducer ))
    dispatch({type: 'UPDATE_STATS', stats: stats})
  }

  render() {
    return (
      <div>
        <h1>Input Form</h1>
        <form onSubmit={this.handleSubmit}>
          <h3><strong>Site Statistics:</strong></h3>
          <span>Page Views: <input
            value={this.state.pageViews}
            placeholder={5000000}
            name="pageViews"
            onChange={this.onChange} /></span><br />
          <span>Unique Visitors: <input
            value={this.state.uniqueVisitors}
            placeholder={800000}
            name="uniqueVisitors"
            onChange={this.onChange} /></span><br />
          <span>Impressions: <input
            value={this.state.impressions}
            placeholder={1000000}
            name="impressions"
            onChange={this.onChange} /></span><br />
        </form>
        <div>&nbsp;</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    impressions: state.stats.impressions,
    pageViews: state.stats.pageViews,
    uniqueVisitors: state.stats.uniqueVisitors,
  }
}

export default connect(mapStateToProps)(Form);
