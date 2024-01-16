export default function storeReducer(state = [], action) {
  switch (action.type) {
    case "ADD_COMPANY_TO_FAVORITES":
      return [...state, action.payload];
    case "REMOVE_COMPANY_FROM_FAVORITES":
      return state.filter((company) => company !== action.payload);
    default:
      return state;
  }
}
