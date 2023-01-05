import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./voting.css";

function Voting({ vote, setVote }) {

  const navigate = useNavigate();
  const [currVote, setCurrVote] = useState();

  function handleFun(){
    vote.forEach(ele => {
        if(ele.candidate === currVote){
            ele.vote_Count++;
        }
    });

    setVote([...vote])
    alert('Vote Successfull')
  }

  function handleLogout() {
    navigate("/");
  }

  return (
    <div className="voting_container">
      <div className="selection">
        <input
          type="radio"
          name="candidate"
          value="Candidate_1"
          onClick={(e) => setCurrVote(e.target.value)}
        />
        Candidate 1
        <input
          type="radio"
          name="candidate"
          value="Candidate_2"
          onClick={(e) => setCurrVote(e.target.value)}
        />
        Candidate 2
        <input
          type="radio"
          name="candidate"
          value="Candidate_3"
          onClick={(e) => setCurrVote(e.target.value)}
        />
        Candidate 3
        <input
          type="radio"
          name="candidate"
          value="Candidate_4"
          onClick={(e) => setCurrVote(e.target.value)}
        />
        Candidate 4
      </div>

      <div className="btn_vote">
        <button className="voting_done" onClick={handleFun} >
          Vote Done
        </button>
        <span
          className="logout_btn"
          style={{ fontWeight: "700" }}
          onClick={handleLogout}
        >
          LogOut
        </span>
      </div>

      <h1>{currVote}</h1>
    </div>
  );
}

export default Voting;
