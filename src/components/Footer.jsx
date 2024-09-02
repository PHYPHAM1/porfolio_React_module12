import '../styles/Footer.css';
import IMAGES from '../assets/images/index.js';

function Footer() {
    return (
        <footer  className="footer">
            <a href="https://github.com/PHYPHAM1"> <img src={ IMAGES.logoGolf } alt="" /></a>
            <a href="https://www.linkedin.com/in/phy-pham-02190327/"> <img src={ IMAGES.logoMasters } alt="" /></a>
        </footer>
    );
}

export default Footer;
