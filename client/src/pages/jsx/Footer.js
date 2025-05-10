import '../styling/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer(){
    return(
        <div className="my-footer">
            <p className="c-right">
                <FontAwesomeIcon icon={faCopyright} />
                 2025 Mandla Ndiweni. All rights Reserved
            </p>
        </div>
    )
}

export default Footer;