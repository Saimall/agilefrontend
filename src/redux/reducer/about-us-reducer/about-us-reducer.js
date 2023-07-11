const initialValue = {
  agileCardData: [],
};

const aboutUsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_AGILE_CARD":
      return {
        ...state,
        agileCardData: [...state.agileCardData, action.payload],
      };
    default:
      return state;
  }
};

export default aboutUsReducer;
