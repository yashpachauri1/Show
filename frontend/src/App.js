import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root.';
import Error from './pages/Error';
import Home from './pages/Home';
import TaskRoot from './pages/TaskRoot';
import Tasks, { loader as taskLoader } from './pages/Tasks';
import NewTask from './pages/NewTask';
import { action as formAction } from './components/TaskForm';
import Details, { loader as detailsLoader, action as deleteAction } from './pages/Details';
import Auth from './pages/Auth';
import {action as authAction} from './pages/Auth'
import { tokenLoader } from './util/Auth';
import { Logout } from './pages/Logout';
import Dark from './components/Dark';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      id:'root',
      loader:tokenLoader,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {path:'auth', element:<Auth/> ,action:authAction},
        {path:'logout', action:Logout},
        { path: 'tasks', element: <TaskRoot />,
          children: [
            { index:true, element: <Tasks />, loader: taskLoader },
            { path: 'newTask', element: <NewTask />, action: formAction },
            { path: ':taskId', element: <Details />, loader: detailsLoader, action: deleteAction, }
          ]
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
     
    </>
  );
}

export default App;
