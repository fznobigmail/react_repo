// import React from "react";
// import Main from "./components/main"
// export default function App() {
// <Main/>
// }
// import React, { useState } from "react";
// import "./styles.css";
// import Subheader from "./components/subheader"
// import Sidebar from "./components/sidebar"
// import Modal from "./components/modal"
// import Counter from "./components/counter"
// import UserContext from "./context/UserContext"
// // import StaleClosure from "./components/staleclosure"
// import Btn from "./components/button"
// export default function App() {
//   const [user ,setUser] = useState({
//     id:1,
//     name:'ali',
//   });
//   const [showModal, setShowModal] = useState(false)
//   const toggle = () =>
//     setShowModal(!showModal)
//     return (
//     <>
//      <UserContext.Provider value={ {user,setUser} }>
//      <div className="divApp">
//         <div className="divSideBar">
//           <Sidebar />
//         </div>
//         <div className="main">
//           <div className="subheader">
//             <Subheader test="hello"/>
//           </div>
//           <div className="divModal">
//             <Modal show={showModal} onClose={toggle} size="modal-lg"/>
//           </div>
//           <Btn func={toggle} name={"افزودن"} class="md"></Btn>
//           <div>
//             <Counter />
//           </div>
//           <div>
//             {/* <StaleClosure/> */}
//           </div>
//         </div>
//       </div>
//      </UserContext.Provider>
//     </>
//   )
// }
"use strict";