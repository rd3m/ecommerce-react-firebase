import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.Grid_footer}>
            <div className={styles.Grid_box}>
                <h3 className={styles.text_white}>Footer</h3>
            </div>
            <div className={styles.Grid_box}>
                <h3 className={styles.text_white}>About us</h3>
                <p className={styles.text_white}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio earum numquam repellat obcaecati magni similique
                    nostrum doloremque, officia cupiditate eligendi perspiciatis
                    quaerat tempore ipsum porro deserunt beatae ad laborum
                    libero!
                </p>
            </div>
            <div className={styles.Grid_box}>
                <h3 className={styles.text_white}>Newsletter</h3>
                <p className={styles.text_white}>
                    Subscribe to receive updates, access to exclusive deals, and
                    more.
                </p>
                <input type="email" placeholder="Enter your email" />
                <div>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
