import { useLoaderData, redirect, json } from "react-router-dom";
import TaskItem from "../components/TaskItem";
import { getAuthToken } from "../util/Auth";
const Details = () => {

    const data = useLoaderData();
    console.log("eve",data)
    const task = data.event

    return (
        <>
            <TaskItem task={task} />
        </>
    )
}

export default Details

export async function loader({ request, params }) {
    const token = getAuthToken();
    const taskId = params.taskId;
    console.log(taskId)
    const response = await fetch(`http://localhost:5000/${taskId}`,{
        headers:{
            'Authorization' : 'Bearer '+ token
        
        }
    });
    if (!response.ok) {
        return new Response(JSON.stringify({ message: 'Could not fetch events' }), { status: 500 });
    } else {
        console.log(response)
        return response;
    }
}
// for delete
export async function action({ request, params }) {

    const taskId = params.taskId;
    const token = getAuthToken();
    const response = await fetch(`http://localhost:5000/${taskId}`, {
        method: request.method,
        headers:{
            
            'Authorization' : 'Bearer '+ token
        }
    });
    if (!response.ok) {
        throw json({ message: 'Could not fetch details for selected event' }, { status: 500 }

        );

    }

    return redirect('/tasks')

}

