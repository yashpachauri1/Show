import { useEffect, useState } from "react";
import { Form, Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import { Logout } from "../pages/Logout";
import Dark from "./Dark";
const MainHeader = () => {
  const [email, setEmail] = useState('');
  const token = useRouteLoaderData('root');
  const navigate = useNavigate();
  useEffect(() => {
    const userEmail = localStorage.getItem('email');
    setEmail(userEmail);

  }, [token]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-nav">
          <Link className="nav-link" to='/'>Home</Link>
          <Link className="nav-link" to={token ? 'tasks' : '/auth?mode=login'}>Tasks</Link>
          {!token && <Link className="nav-link" to='/auth?mode=login'>Authenticate</Link>}
        </div>

        {token && (
          <div className="ml-auto d-flex align-items-center">
            {email && (
              <p className="nav-item text-center" style={{ color: '#777', fontSize: '16px', margin: '0', padding: '0 1rem' }}>{email}</p>
            )}

            <div style={{ display: 'flex' }}>

            <Form method="post" action="/logout">
              <button className="btn btn-danger ml-2">Logout</button>
            </Form>
              <Dark />
            </div>
           
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainHeader;