import Button from '../Button/Button';

import './NumPad.css';

function NumPad(props) {
    const nums = [...Array(10)].map((e, i) => i);

    const clickNumButton = (e) =>
        props.setResult(props.result * 10 + parseInt(e.target.value));

    const clear = (e) => {
        props.setResult(0);
        props.setPreviousResult(0);
    }
    return (
        <div className="NumPad">
            {nums.map((e) => (
                <Button text={e} key={e} value={e} clickHandler={clickNumButton} />
            ))}
            <Button text='Clear' clickHandler={clear} additionalClasses={['__clear']} />
        </div>
    );
}

export default NumPad;
