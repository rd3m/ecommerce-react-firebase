import Cart from "../../components/Cart";
import Navbar from "../../components/Navbar";
import BrandBanner from "../../components/BrandBanner";

const Header = () => {
    return (
        <div>
            <BrandBanner />
            <Navbar />
            <Cart />
        </div>
    );
};

export default Header;
