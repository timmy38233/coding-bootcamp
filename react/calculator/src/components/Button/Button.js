import './Button.css';

function Button(props) {
    const className = [
        'Button',
        [...(props.additionalClasses || [])].map((e) => 'Button' + e),
    ].join(' ').trim();

    return (
        <button className={className} value={props.value} onClick={props.clickHandler}>
            {props.text}
        </button>
    );
}

export default Button;
