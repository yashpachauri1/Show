import { Outlet } from "react-router-dom";
import TaskHeader from "../components/TaskHeader";

const TaskRoot = () =>{

    return(
        <>
        <TaskHeader/>
        <main>
            <Outlet/>
        </main>
        </>
    )

}

export default TaskRoot;