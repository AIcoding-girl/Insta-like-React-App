import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3000/signup`,
  timeout: 1000,
  headers: {
    "X-auth-key": "token123",
  },
});

createUser = async () => {
  let res = await api.post("/login", {
    email: "email",
    password: "password",
  });
  console.log(res);
  this.setState({ email: res.data });
};

export const setAuthToken = (token) => {
  if (token) {
    //applying token
    instance.defaults.headers.common["Authorization"] = token;
  } else {
    //deleting the token from header
    delete instance.defaults.headers.common["Authorization"];
  }
};
