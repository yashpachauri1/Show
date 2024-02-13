import { Form, redirect, useNavigate, useNavigation, json, useActionData } from 'react-router-dom';
import classes from './TaskForm.module.css'
import { getAuthToken } from '../util/Auth';

const TaskForm = ({ task }) => {
    const data = useActionData();
    const navigate = useNavigate();
    const navigation = useNavigation();
     

    const isSubmitting = navigation.state === 'submitting';

    const cancelHandler = () => {
        navigate('..');
    }
    return (

        <>
            <Form method='POST' className={classes.form}>
                {data && data.errors && (
                    <ul>
                        {Object.values(data.errors).map((err) => (
                            <li key={err}>{err}</li>
                        ))}
                    </ul>
                )}
                <p>
                    <label htmlFor="name">Name</label>
                    <input type='text' id='name' name='name'
                        required
                        defaultValue={task ? task.title : ''}
                    />
                </p>
                <p>
                    <label htmlFor="task">Task</label>
                    <input
                        id="task"
                        type="text"
                        name="task"
                        required

                        defaultValue={task ? task.date : ''}
                    />
                </p>

                <div className={classes.actions}>
                    <button type="button" disabled={isSubmitting} onClick={cancelHandler}>
                        Cancel
                    </button>
                    <button disabled={isSubmitting} type="submit" >
                        {isSubmitting ? 'submitting' : 'add'}
                    </button>
                </div>
            </Form>
        </>
    )
}

export default TaskForm;

export async function action({ request, params }) {
    const data = await request.formData();
    const token = getAuthToken();
    const taskData = {
        name: data.get('name'),
        task: data.get('task')
    }

    const response = await fetch('http://localhost:5000/', {
        method: 'POST',
        body: JSON.stringify(taskData),
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearar ' + token
        }
    })
    if (!response.ok) {
        throw json({ message: 'Could not save task' }, { status: 500 });
    }
    else {
        const dt = await response.json();
          console.log('done',dt)
        return redirect('/tasks');
    }

}