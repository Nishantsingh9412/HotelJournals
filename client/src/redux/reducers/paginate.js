const initialState = {
  filteredCurrentPage: 1,
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTERED_CURRENT_PAGE':
      console.log('SET_FILTERED_CURRENT_PAGE', action.data);
      return {...state,filteredCurrentPage: action.data,};
    default:
      return state;
  }
};

export default pageReducer;