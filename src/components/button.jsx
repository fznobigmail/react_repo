import React from "react";
// import "../styles.css"
export default function Btn(props) {
   return <button 
   onClick={props.func}>{props.name}</button>
}