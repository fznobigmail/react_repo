import React  from "react";
import "./styles.css";
import Subheader from "./components/subheader"
import Sidebar from "./components/sidebar"
import Modal from "./components/modal"
import Counter from "./components/counter"
import StaleClosure from "./components/staleclosure"
export default function App() {
  return <>
  <div className="divApp">
    <div className="divSideBar"><Sidebar/></div>
    <div className="main">
    <div className="subheader"><Subheader/></div>
    <div className="divModal"><Modal /></div> 
    <div><Counter/></div>
    <div><StaleClosure/></div>
    </div>
  </div>
  </>
}
