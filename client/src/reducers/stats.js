const stats = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_STATS':
      return state.map( stat => {
        if( stat.id === action.stat.id )
          return action.stat
        return stat
      })
    case 'DELETE_ITEM':
      return state.filter( stat => stat.id !== action.id )
    default:
      return state;
  }
}

export default stats;
