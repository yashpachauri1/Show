import { Form, json, useNavigation, useSearchParams, Link, useActionData } from "react-router-dom";
import classes from './AuthForm.module.css'
const AuthForm = () => {

    const navigation = useNavigation();
    const data = useActionData();
    const [serchParams] = useSearchParams();
    const isLogin = serchParams.get('mode') === 'login';

    const isSubmitting = navigation.state === 'submitting';

 

    return (
        <Form className={classes.form} method="post">
            <h1>{isLogin ? 'Login' : 'Create new user'}</h1>

            {
            data && data.error && (
                <ul className={classes.errors}>
                  {Object.values(data.error).map((err) => (
                    <li key={err} >{err}</li>))}
                </ul>
              )
            }

            {!isLogin && <p>
                <label htmlFor="name" >Name</label>
                <input type="text" name="name" id="name" required />
            </p>}
            <p>
                <label htmlFor="email" >Email</label>
                <input type="text" name="email" id="email" required />
            </p>
            <p>
                <label htmlFor="password" >Password</label>
                <input type="password" name="password" id="password" required />
            </p>
            <div className={classes.actions}>
                <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
                    {isLogin ? 'Create new user' : 'Login'}
                </Link>
                <button type='submit'>{isSubmitting ? 'Submitting...' : 'Save'}</button>
            </div>

        </Form>
    )
}

export default AuthForm;

