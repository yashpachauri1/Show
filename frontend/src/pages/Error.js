import PageContent from "../components/PageContent";
import { useRouteError } from "react-router";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import classes from './Error.module.css';

const Error = () => {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <div className={classes.error}>
      <div className={classes.header}>
      <MainHeader />
      </div>
    
      <div className={classes.page}>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
      </div>

      <div className={classes.footer} >
      <Footer />
      </div>
     
    </div>
  );
};

export default Error;