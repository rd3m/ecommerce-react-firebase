import styles from "../Navbar/Navbar.module.scss";

const Navbar = () => {
    return (
        <div className={styles.navbar__container}>
            <div className={styles.navbar}>
                <a href="/" className={styles.navbar__item}>
                    home
                </a>
                <a href="/clothing" className={styles.navbar__item}>
                    clothing
                </a>
                <a href="/shoes" className={styles.navbar__item}>
                    shoes
                </a>
                <a href="/accessories" className={styles.navbar__item}>
                    accessories
                </a>
                <a href="/gifts" className={styles.navbar__item}>
                    gifts
                </a>
            </div>
        </div>
    );
};

export default Navbar;
