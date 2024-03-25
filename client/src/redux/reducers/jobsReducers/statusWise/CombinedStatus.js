// const initialState = {
//     hiredCandidates: [],
//     offeredCandidates: [],
//     rejectedCandidates: [],
//     notOfferedCandidates: [],
// };

// const CombinedCandidatesReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'GET_HIRED_CANDIDATES':
//             return { ...state, hiredCandidates: action.data };
//         case 'GET_OFFERED_CANDIDATES':
//             return { ...state, offeredCandidates: action.data };
//         case 'GET_REJECTED_CANDIDATES':
//             return { ...state, rejectedCandidates: action.data };
//         case 'NOT_OFFERED_CANDIDATES':
//             return { ...state, notOfferedCandidates: action.data };
//         default:
//             return state;
//     }
// };

// export default CombinedCandidatesReducer;