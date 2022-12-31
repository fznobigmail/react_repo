import React, { useState } from "react";
import "../styles.css";
import Subheader from "./subheader"
import Sidebar from "./sidebar"
import Modal from "./modal"
import Counter from "./counter"
import UserContext from "../context/UserContext"
// import StaleClosure from "./components/staleclosure"
import Btn from "./button"
export default function Main() {
  const [user ,setUser] = useState({
    id:1,
    name:'ali',
  });
  const [showModal, setShowModal] = useState(false)
  const toggle = () =>
    setShowModal(!showModal)

    return (
    <>
     <UserContext.Provider value={ {user,setUser} }>
     <div className="divApp">
        <div className="divSideBar">
          <Sidebar />
        </div>
        <div className="main">
          <div className="subheader">
            <Subheader test="hello"/>
          </div>
          <div className="divModal">
            <Modal show={showModal} onClose={toggle} size="modal-lg">
                <h6>welcome {user.name}</h6>
                    <p>ساخت دسته بندی جدید</p>
                    <form>
                      <input ></input>
                    </form>
                    <hr></hr>
            </Modal>
          </div>
          <Btn func={toggle} name={"افزودن"} class="md"></Btn>
          <div>
            <Counter />
          </div>
          <div>
            {/* <StaleClosure/> */}
          </div>
        </div>
      </div>
     </UserContext.Provider>
    </>
  )
}
