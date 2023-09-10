// import { Menu } from "antd";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import "./App.css";
// import Events from "./components/Events";
// import Home from "./components/Home";
// import { HomeOutlined, DashboardOutlined } from "@ant-design/icons";

// function App() {
//   const navigate = useNavigate();
//   return (
//     <div style={{ display: "flex" }}>
//       <Menu
//         onClick={({ key }) => {
//           if (key === "signout") {
//             //todo
//           } else {
//             navigate(key);
//           }
//         }}
//         items={[
//           {
//             label: "Home",
//             key: "/",
//             icon: <HomeOutlined />,
//           },
//           {
//             label: "Added Events",
//             key: "/events",
//             icon: <DashboardOutlined />,
//           },
//           {
//             label: "signout",
//             key: "/signout",
//             icon: <DashboardOutlined />,
//           },
//         ]}
//       ></Menu>
//       <Content />
//     </div>
//   );
// }
// function Content() {
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/events" element={<Events />} />
//     <Route path="/signout" element={<div>SingOut</div>} />
//   </Routes>;
// }

// export default App;
import React from "react";

import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
