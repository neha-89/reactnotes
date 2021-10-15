
import React from "react";
import { useHistory ,Link, Switch, Route, useRouteMatch} from "react-router-dom";
import { useEffect } from "react";
import ViewProfile from "../components/ViewProfile";
import EditProfile from "../components/EditProfile";

const Profile = ({login}) => {
   const history = useHistory();

   useEffect(()=> {
        if(!login){
         history.push('/');
        }
   },[login,history])

   const {path,url} =useRouteMatch();

    return(
        <div className ="header">
            <h1>Profile page</h1>
            <ul>
                <li><Link to={`${url}/viewprofile`} >ViewProfile</Link></li>
                <li><Link to={`${url}/editprofile`} >EditProfile</Link></li>
            </ul>
            <Switch>
                <Route path={`${path}/viewprofile`} component={ViewProfile}/>
                <Route path={`${path}/editprofile`} component={EditProfile}/>

            </Switch>
        </div>
    )
}
export default Profile;
