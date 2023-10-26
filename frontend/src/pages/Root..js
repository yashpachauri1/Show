import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

const Root = () => {

    return (
        <>
            <MainHeader />
            <main>
                <Outlet />
            </main>
        </>
    )

}

export default Root;