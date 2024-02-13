import { redirect } from "react-router-dom";


export function getAuthToken(){
    const token = localStorage.getItem('token');
  
    if(!token){
        return null;
    }

    return token;
}




export function tokenLoader(){
    const token = getAuthToken();

    return token;
}



export async function login(data) {
}

export function checkAuthLoader() {
    const token = getAuthToken();
  
    if (!token) {
      return redirect('/auth')
    }
  }