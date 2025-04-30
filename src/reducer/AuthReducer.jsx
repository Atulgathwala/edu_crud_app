export const initialAuthState = {
  user: null,
  isAuthenticated: false,
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: false,
      };
    case "REGISTER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "REGISTER":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
