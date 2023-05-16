import React from "react";
import Menus from "./Components/Menus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Logout from "./Components/Logout";
import Myaccount from "./Components/Myaccount";
import Cart from "./Components/Cart";
import { createContext, useReducer } from "react";
import { initialState,reducer } from "./Reducer/useReducer";

export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/myaccount" element={<Myaccount />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Menus />
          <Routing />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
