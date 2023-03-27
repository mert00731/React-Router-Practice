import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {

    return(
        <div className="error-notfound">
            <h2>Error</h2>
            <p>404 Not Found</p>
            <Link to="/">Homepage</Link>
        </div>
    )

}