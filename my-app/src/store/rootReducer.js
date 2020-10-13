import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import App from "./components/App";

// const { createStore } = Redux;
// const store = createStore(rootReducer);

// <Provider store={store}>

const initState = {
  users: [],
  logins: [],
};

const rootReducer = (state = initState, action) => {
  return state;
};

// function rootReducer(state = initState, action) {
//   if (action.type == "REGISTER_USER") {
//     return {
//       ...state,
//       users: [...state.users, action.username],
//     };
//   }

//   if (action.type == "LOGIN_USER") {
//     return {
//       ...state,
//       posts: [...state.logins, action.email],
//     };
//   }
// }

store.subscribe(() => {
  console.log("state updated");
  console.log(store.getState());
});

// const newUserAction = { type: "REGISTER_USER", user: "username" };
// store.dispatch(newUserAction);

store.dispatch({ type: "REGISTER_USER", username: "username1" });
store.dispatch({ type: "REGISTER_USER", username: "username2" });
store.dispatch({ type: "LOGIN_USER", email: "email@email.com" });

export default rootReducer();
