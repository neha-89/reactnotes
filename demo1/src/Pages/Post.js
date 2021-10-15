import React from "react";
import {useParams,useLocation} from "react-router-dom";

const Post =()=>{
    const {id} = useParams();
   const query = new URLSearchParams(useLocation().search);

    return(
        <div>
          <h2>Id is {id}</h2>
          <h2>firstname:{query.get('first')}</h2>
          <h2>lastname:{query.get('last')}</h2>
        </div>
    )
}
export default Post;