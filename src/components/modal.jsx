import React from "react";
import "../styles.css";
import Btn from "./button"
// import  UserContext  from "../context/UserContext";


const Modal = (props) => {
  // const {user,setUser} = React.useContext(UserContext)
  return <>
    <div id="myModal" className= {`modal ${props.show?'show':''} ${props.size}`}>
      <div className="modal-content">
        {props.children}
          <Btn name="تایید" class="sm"></Btn>
          <Btn name="انصراف" func={props.onClose} class="md"></Btn>
        
      </div>
    </div>
  </>

  
  
}
export default Modal;