import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
                    PICS <i class="far fa-images"/>
                </Link>


                <div className = 'menu-icon' onClick = {handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
            
            <ul className={click ? 'nav-menu active' : 'nav-menu'}> {/* when you clik the menu it closes */}
                <li className = "nav-item">
                    <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className = "nav-item">
                    <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className = "nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className = "nav-item">
                        <Link to="/sign-up" className="nav-links=mobile" onClick={closeMobileMenu}>
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar
