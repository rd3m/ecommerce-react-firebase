import styles from "../BrandBanner/BrandBanner.module.scss";
import CartIcon from "../CartIcon";

const BrandBanner = () => {
    return (
        <div>
            <h1 className={styles.banner}>props</h1>
            <CartIcon />
        </div>
    );
};

export default BrandBanner;
