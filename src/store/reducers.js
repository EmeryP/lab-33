
let initialState = {
  people: [],
  person: {},
}

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type){
    case 'GET':
      let peopleState = { ...state, people: payload.results };
      return peopleState;

    case 'GETONE':
      let personState = { ...state, person:  payload};
      return personState;
    
    default:
    return state;
  }
}