import React from "react";
import Main from "./components/main"
import Route from "./Router/rout";
import About from "./components/about"
import Welcome from "./components/welcome";
import { DatePicker } from 'antd';
import { Button,Space } from 'antd';
export default function App() {
    return (
        <>
            <Space wrap>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Space>
            <DatePicker />
        <Route path="/">
            <Main/>
        </Route>
        <Route path="/about">
            <About/>
        </Route>
        <Route path={"/welcome"}>
            <Welcome/>
        </Route>

        </>)

}
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
//
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
//             <Modal show={showModal} onClose={toggle} size="modal-lg">
//             <h6>welcome {user.name}</h6>
//         <p>ساخت دسته بندی جدید</p>
//         <form>
//           <input ></input>
//           </form>
//           <hr></hr>
//           </Modal>
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
