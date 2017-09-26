const stats = (state = {
  pageViews: 1000000,
  uniqueVisitors: 10000,
  impressions: 300000
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
    case 'DELETE_ITEM':
      return state.filter( stat => stat.id !== action.id )
    default:
      return state;
  }
}

export default stats;
