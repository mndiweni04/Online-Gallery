import '../styling/Header.css';
import Logo from '../../components/plt-logo.jpg';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faPhotoFilm, faContactBook } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return(
        <div className="header">
            <img src={Logo} alt="Blossom Gallery logo" className="logo-img" />
            
            <nav className="nav-bar">
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faHome} />
                        Home
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPhotoFilm} />
                        Gallery
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faContactBook} />
                        Contact Us
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;