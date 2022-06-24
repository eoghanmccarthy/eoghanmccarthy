export const initialState = {};

export const reducer = (state, action) => {
  switch (action.type) {
    case "open":
      return { ...state, [action.payload.name]: { ...action.payload.props } };
    case "close":
      const { [action.payload.name]: cleared, ...rest } = { ...state };
      return { ...rest };
    case "clear":
      return initialState;
    default:
      return state;
  }
};
