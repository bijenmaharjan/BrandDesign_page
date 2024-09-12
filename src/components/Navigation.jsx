import React from "react";

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.ZRONvRllaSV6Dzv52zNF3gHaEK&pid=Api&P=0&h=220"
          alt="logo"
        />
      </div>

      <ul>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Location</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navigation;
