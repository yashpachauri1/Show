import { Link, useSubmit, Form, json } from 'react-router-dom';

import classes from './TaskItem.module.css';

function TaskItem({ task }) {
    const submit = useSubmit();

    function startDeleteHandler() {
        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            submit(null, { method: 'delete' });
        }
    }

    return (
        <article className={classes.task}>

            <h1>{task.task}</h1>

            <p>{task.name}</p>
            <menu className={classes.actions}>
            <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" name='checkbox' role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" for="flexSwitchCheckDefault">complete</label>
                </div>
                <button onClick={startDeleteHandler}>Delete</button>
            </menu>
        </article>
    );
}

export default TaskItem;

//for updating

// export async function action({params, request})
// {
//     const taskId = params.taskId;
//     const data  = await request.formData();
  
//     const check={
//         complete: data.get('checkbox')
//     } ;

//     const response = await fetch(`http://localhost:5000/${taskId}`, {
//         method:request.method,
//         body:JSON.stringify(check),
//         headers:{
//             "Content-Type": "application/json"
//         }
//     });
//     if (!response.ok) {
//         throw json({ message: 'Could not fetch details for selected event' }, { status: 500 }

//         );

//     }
// }