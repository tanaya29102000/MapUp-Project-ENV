// import React from "react";
// import './Navbar.css'; // Import custom CSS for Navbar styling

// const NavigationBar = () => (
//   <nav className="navbar">
//     <div className="navbar-container">
//       <a href="#home" className="navbar-brand">MapUp Dashboard</a>
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a href="#dashboard" className="nav-link">Dashboard</a>
//         </li>
//         <li className="nav-item">
//           <a href="#insights" className="nav-link">Insights</a>
//         </li>
//       </ul>
//     </div>
//   </nav>
// );

// export default NavigationBar;
import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <a href="#home" className="navbar-brand">MapUp Dashboard</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#dashboard" className="nav-link">Dashboard</a>
        </li>
        <li className="nav-item">
          <a href="#insights" className="nav-link">Insights</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
