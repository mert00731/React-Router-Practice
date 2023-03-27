import React from "react";
import { useRouteError,Link } from "react-router-dom";


export default function UsersError(){
    const error = useRouteError();
    return(
        <div className="error-notfound">
            <h2>Error</h2>
            <p>{error.data}</p>
            <Link to="/">Homepage</Link>
        </div>
    )
}