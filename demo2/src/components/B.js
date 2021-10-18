import React, { useContext } from "react";
import C from "./C";
import {UserContext} from "../App";

function B(){
    const User =useContext(UserContext);
    return(
        <div>
        <C/>
         {User}
        </div>
    )
}
export default B;