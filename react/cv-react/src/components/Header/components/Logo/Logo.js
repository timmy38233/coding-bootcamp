import avatar from './avatar.svg'
import './Logo.css';

function Logo() {
    return (
        <figure className="Logo">
            <object className="Logo__image" data={avatar}></object>
        </figure>
    );
}

export default Logo;
