import styles from "../Navbar/Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className={styles.navbar__container}>
                <div className={styles.navbar}>
                    <Link to="/" className={styles.navbar__item}>
                        home
                    </Link>
                    <Link to="/" className={styles.navbar__item}>
                        glasses
                    </Link>
                    <Link className={styles.navbar__item}>shoes</Link>
                    <Link className={styles.navbar__item}>accessories</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
