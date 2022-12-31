import React from "react";
import UserContext from "../context/UserContext";

export default function Subheader(props){
    const {user,setUser} = React.useContext(UserContext)
    return (
    <>
    <div>
         <h6>{props.test} {user.name}
         </h6>
    </div>
    </>
    )
}