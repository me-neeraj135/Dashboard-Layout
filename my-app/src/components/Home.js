/** @format */

import { NavLink } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h2>welcome to home page</h2>
      <div className="flex justify-around ">
        <div className="pageCnt flex-30 flex justify-center">
          <NavLink to="/articles">
            <h3>articles page</h3>
          </NavLink>
        </div>
        <div className="pageCnt flex-30 flex justify-center">
          <NavLink to="/books">
            <h3>books page</h3>
          </NavLink>
        </div>

        <div className="pageCnt flex-30 flex justify-center">
          <NavLink to="/people">
            <h3>people page</h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
