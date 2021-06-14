import React from 'react'
import {
    // BrowserRouter as Router,
    Link
}from 'react-router-dom';
export default function Menu(){
    return(
        <>
        <nav class="nav nav-pills nav-justified" >
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light"> */}
            <a class="nav-item nav-link" href="#"><Link to="/enter">כניסה</Link></a><br></br>
            <a class="nav-item nav-link" href="#"><Link to="/viewOne">הצגה</Link></a><br></br>
            <a class="nav-item nav-link" href="#"><Link to="/showUsers">לתצוגת העובדים</Link></a><br></br>
         
        </nav>
        </>
    )
}