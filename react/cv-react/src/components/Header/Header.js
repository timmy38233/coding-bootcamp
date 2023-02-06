import Greeting from './components/Greeting/Greeting.js';
import Logo from './components/Logo/Logo.js';

import './Header.css';

function Header() {
    return (
        <header className="Header">
            <Greeting />
            <Logo />
        </header>
    );
}

export default Header;
