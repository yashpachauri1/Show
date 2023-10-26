import classes from './Footer.module.css';

const Footer = () => {

    return (
        <>
            <footer>
                <div className={classes.footer}>
                    <div className="footer-logo">

                        <h1>Your Website</h1>
                    </div>
                    <div className={classes.list}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className={classes.social}>

                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className={classes.bottom}>

                    &copy; 2023 Your Website. All rights reserved.
                </div>
            </footer>

        </>
    )

}

export default Footer;