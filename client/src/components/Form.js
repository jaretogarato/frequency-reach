import React from 'react';
import { connect } from 'react-redux';
import { updateStats } from '../actions/stats';
// import { incId } from '../actions/nextId';

// page_views impressions unique_visitors

class Form extends React.Component {
  state = { page_views: 0, impressions: 0, unique_visitors: 0 }

  onChange = (e) => {
    this.setState({ page_views: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // get name from input
    let page_views = this.state.page_views;
    let impressions = this.state.impressions;
    let unique_visitors = this.state.unique_visitors;

    let { dispatch, id } = this.props;
    let stats = { page_views, impressions, unique_visitors };

    // update Redux store
    dispatch(updateStats(stats));
  }

  render() {
    return (
      <div>
        <h1>Input Form</h1>
        <form onSubmit={this.handleSubmit}>
          <h3><strong>Site Statistics:</strong></h3>
          <span>Page Views: <input value={this.state.page_views} onChange={this.onChange} /></span><br />
          <span>Unique Visitors: <input value={this.state.impressions} onChange={this.onChange} /></span><br />
          <span>Impressions: <input value={this.state.unique_visitors} onChange={this.onChange} /></span><br />
        </form>
        <div>&nbsp;</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    impressions: state.impressions,
    page_views: state.page_views,
    unique_visitors: state.unique_visitors,
  }
}

export default connect(mapStateToProps)(Form);
