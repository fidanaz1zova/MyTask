import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Layout/Header";
import Home from "./pages/Home";

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

// import { useState, React } from "react";
// import { MyContext } from "./MyContext";
;

// function App() {
//   const [data, setData] = useState("");

//   return (
//     <div>
//       <MyContext.Provider value={{ data, Setdata }}>
//         <MyComponent />
//       </MyContext.Provider>
//     </div>
//   );
// }

// export default App;