import React from "react";
import "../styles.css";
import Btn from "./button";

// window.onClick = function(event) {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }

// }
export default function Modal() {
  return <>
    <Btn func={showModal} name=" + افزودن"></Btn>
    <div id="myModal" className="modal">
      <div className="modal-content">
        <p>ساخت دسته بندی جدید</p>
        <form>
          <input></input>
          <hr></hr>
          <Btn name="تایید"></Btn>
          <Btn name="انصراف" func={hideModal}></Btn>
        </form>
      </div>
    </div>
  </>

  function showModal(event) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

  }
  function hideModal(event) {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

}