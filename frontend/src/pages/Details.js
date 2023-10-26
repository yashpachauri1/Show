import { useLoaderData, redirect, json } from "react-router-dom";
import TaskItem from "../components/TaskItem";
const Details = () => {

    const data = useLoaderData();

    const task = data.event

    return (
        <>
            <TaskItem task={task} />
        </>
    )
}

export default Details

export async function loader({ request, params }) {

    const taskId = params.taskId;

    const response = await fetch(`http://localhost:5000/${taskId}`);
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

    const response = await fetch(`http://localhost:5000/${taskId}`, {
        method: request.method
    });
    if (!response.ok) {
        throw json({ message: 'Could not fetch details for selected event' }, { status: 500 }

        );

    }

    return redirect('/tasks')

}

