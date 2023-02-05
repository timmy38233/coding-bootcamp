import './Icon.css';

function Icon(props) {
    return (
        <div className="Icon">
            <object className="Icon__image" data={props.path}></object>
        </div>
    );
}

export default Icon;
