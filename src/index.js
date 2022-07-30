import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MemberList from "./components/members/list";
import MemberEdit from "./components/members/edit";
import AssistanceList from "./components/assistance/list";
import AssistanceEdit from "./components/assistance/edit";
import ResponsiveAppBar from "./components/assistance/list/menu";
import Certificate from "./components/members/certificate";

const root = (
  <React.StrictMode>
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<AssistanceList />}></Route>
        <Route path="/members" element={<MemberList />}></Route>
        <Route path="/members/new" element={<MemberEdit />}></Route>
        <Route path="/members/:id" element={<MemberEdit />}></Route>
        <Route path="/assistance" element={<AssistanceList />}></Route>
        <Route path="/assistance/new" element={<AssistanceEdit />}></Route>
        <Route path="/assistance/:id" element={<AssistanceEdit />}></Route>
        <Route path="/certificate/" element={<Certificate />} ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
ReactDOM.render(root, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
