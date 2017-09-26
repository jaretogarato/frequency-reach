const stats = (state = {
  pageViews: 1000000,
  uniqueVisitors: 200000,
  impressions: 500000
}, action) => {
  switch(action.type) {
    case 'UPDATE_STATS':
      console.log(action.stats)
      return action.stats
      // return state.map( stat => {
      //   if( stat.id === action.stat.id )
      //     return action.stat
      //   return stat
      // })
    default:
      return state;
  }
}

export default stats;
