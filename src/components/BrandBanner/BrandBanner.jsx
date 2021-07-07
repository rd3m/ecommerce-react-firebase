import styles from "../BrandBanner/BrandBanner.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const BrandBanner = () => {
    return (
        <div className={styles.flex}>
            <div>
                <h1 className={styles.banner}>props</h1>
            </div>

            <div>
                <Link to="/cart" className={styles.cart_link}>
                    <FontAwesomeIcon
                        id={styles.cartIcon}
                        icon={faShoppingBag}
                    />
                </Link>
            </div>
        </div>
    );
};

export default BrandBanner;
