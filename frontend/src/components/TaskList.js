// import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

import classes from './TaskList.module.css'

function TaskList({ tasks }) {
    // const events = useLoaderData();

    return (
        <div className={classes.tasks}>
            <h1>All Tasks</h1>
           
           {tasks &&  <ul className={classes.list}>
                {tasks.map((task) => (
                    <li key={task._id} className={classes.item}>
                        <Link to={task._id}>

                            <div className={classes.content}>
                                <h2>{task.task}</h2>

                            </div>
                        </Link>
                    </li>
                ))}
            </ul>}
        </div>
    );
}

export default TaskList;