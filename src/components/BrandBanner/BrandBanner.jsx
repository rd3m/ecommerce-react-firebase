import styles from "../BrandBanner/BrandBanner.module.scss";
import { Link } from "react-router-dom";

const BrandBanner = () => {
    return (
        <div className={styles.flex}>
            <div>
                <h1 className={styles.banner}>props</h1>
            </div>

            <div>
                <Link to="/cart" className={styles.cart_link}>
                    Cart
                </Link>
            </div>
        </div>
    );
};

export default BrandBanner;
