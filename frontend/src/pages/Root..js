import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import classes from './Root.module.css'
const Root = () => {

    return (
        <div className={classes.root}>
        <MainHeader />
        <main className={classes.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    )

}

export default Root;