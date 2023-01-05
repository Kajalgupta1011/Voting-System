import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Voting from "./pages/Voting";
import AdminLogin from "./pages/Admin/AdminLogin";

function App() {
  const candidate = [
    {
      candidate: "Candidate_1",
      vote_Count: 0,
    },
    {
      candidate: "Candidate_2",
      vote_Count: 0,
    },
    {
      candidate: "Candidate_3",
      vote_Count: 0,
    },
    {
      candidate: "Candidate_4",
      vote_Count: 0,
    },
  ];

  const [vote, setVote] = useState(candidate);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/voting"
            element={<Voting setVote={setVote} vote={vote} />}
          />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin vote={vote} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
