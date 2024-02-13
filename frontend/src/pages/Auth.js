import { redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Auth = () => {
    return (
        <AuthForm />
    )
}
export default Auth;

export async function action({ request }) {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';


    const data = await request.formData();
    let userData = {}
    if (mode === 'signup') {
        userData = {
            // name: data.get('name'),
            email: data.get('email'),
            password: data.get('password')

        }
    }
    else {
        userData = {
            email: data.get('email'),
            password: data.get('password')
        }
    }
    console.log(userData)
    console.log(mode);

    const response = await fetch(`http://localhost:5000/user/${mode}`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.status === 422 || response.status === 401) {
        console.log(response)
        return response
      }

    if (!response.ok) {
        console.log(response);
        console.log('somthing went wrong')
        return response
    }
    const userDetailsFromBackend = await response.json();
    const token = userDetailsFromBackend.token;
    const email = userDetailsFromBackend.email;

    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    console.log('user',token)
    return redirect('/')



}