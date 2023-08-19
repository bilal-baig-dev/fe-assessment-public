import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import ListTask from "./pages/list-tasks/ListTask";
import CreateTask from "./pages/create-task/CreateTask";
import BulkDelete from "./pages/bulk-delete-task/BulkDelete";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/list-tasks" element={<ListTask />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/bulk-delete" element={<BulkDelete />} />
      </Routes>
    </div>
  );
}

export default App;
