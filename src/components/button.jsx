import React from "react";
// import "../styles.css"
export default function Btn(props) {
   return <button type="button" className={props.class}
   onClick={props.func}>{props.name}</button>
}