import { useEffect } from "react";
import { redirect, useRouteLoaderData } from "react-router-dom";


export  function Logout () {
   
   


    localStorage.removeItem('token');
    console.log('logout')
    localStorage.removeItem('email');
    return redirect('/auth?mode=login')
}

