import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <div className="flex gap-10 m-4">
        <Link to="/">
        <button  className="black_btn ">Home</button>
        </Link>
        <Link to="/signin">
        <button  className="black_btn ">sign in</button>
        </Link>
        <Link to="/fights">
        <button  className="outline_btn ">Fight!!</button>
        </Link>
        <Link to="/leaderboard">
        <button  className="outline_btn ">Leaderboard</button>
        </Link>
        
      </div>
    );
}
export default Header;