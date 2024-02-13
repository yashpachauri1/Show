import { json, useLoaderData, Await } from "react-router-dom";
import { Suspense } from 'react';
import TaskList from "../components/TaskList";
import { getAuthToken } from "../util/Auth";

const Tasks = () => {
    const tasks = useLoaderData();



    return (<>

        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={tasks}>
                {(loadedTasks) => <TaskList tasks={loadedTasks} />}
            </Await>
        </Suspense>
    </>)

}

export default Tasks;
//'http://localhost:5000/'
// https://react-backend-h14a.onrender.com/
export async function loader() {

    const token = getAuthToken();
    
    const response = await fetch('http://localhost:5000/',{
        headers:{
            'Authorization' : 'Bearer ' + token
          }
    });
    const resData = await response.json();
    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch events.' };
        // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
        //   status: 500,
        // });
        throw json(
            { message: resData.error },
            {
                status: 500,
            }
        );
    } else {
        
        return resData.events;
    }

    
}