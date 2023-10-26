import { NavLink } from "react-router-dom";
import classes from './TaskHeader.module.css'
const TaskHeader = () => {

  return (<header className={classes.header}>
    <nav>
      <ul className={classes.list}>
        <li>
          <NavLink to="" className={({ isActive }) => isActive ? classes.active : undefined} end>All Tasks</NavLink>
        </li>
        <li>
          <NavLink to="newTask" className={({ isActive }) => isActive ? classes.active : undefined} end>New Task</NavLink>
        </li>
      </ul>
    </nav>
  </header>)

}

export default TaskHeader;