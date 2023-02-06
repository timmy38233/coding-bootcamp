import './Header.css';

function Header(props) {
    return (
        <header className="Header">
            <h1 className="Header__Greeting">{props.mainAuthor}'s Blog</h1>
        </header>
    );
}

export default Header;