

// import Dashboard from './components/Dashboard';
// import Navbar from "./components/Navbar";
// import ModelYearPieChart from "./components/ModelYearPieChart";
// function App() {
//   return (
//     <div className="App">
//           <Navbar></Navbar>
//       <Dashboard></Dashboard>
//       <ModelYearPieChart></ModelYearPieChart>
      
//     </div>
//   );
// }

// export default App;
import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ModelYearPieChart from "./components/ModelYearPieChart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <ModelYearPieChart />
    </div>
  );
}

export default App;
