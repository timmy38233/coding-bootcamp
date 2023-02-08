import './Footer.scss';

function Footer(props) {
    return (
        <footer className={`Footer Footer--${props.colorScheme}`}>
            <span className="Footer__InfoText">Thank you for reading!</span>
        </footer>
    );
}

export default Footer;