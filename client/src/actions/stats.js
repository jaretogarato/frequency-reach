import axios from 'axios';

// update an item - update action of our items controller
// export const updateStats = (stats) => {
//   return (dispatch) => {
//     axios.put(`/api/stats/${stats.id}`, { stats } )
//       .then( res => dispatch({ type: 'UPDATE_STATS', stats: res.data }) )
//   }
// }

export const updateStats = (stats) => {
  return dispatch => {
    dispatch({type: 'UPDATE_STATS', stats: stats})
  }
}
