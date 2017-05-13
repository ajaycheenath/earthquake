export default function earthquake(state ={}, action) {
  switch (action.type) {
      case 'FETCH_EARTHQUAKES_FULFILLED': {
        return {...state, earthquakes: action.payload.data};
      }
    default:
      return state;
  }
}
