import Button from '../Button/Button';

import './NumPad.css';

function NumPad(props) {
    const nums = [...Array(10)].map((e, i) => i);

    const clickNumButton = (e) =>
        props.setResult(parseInt(props.result) * 10 + parseInt(e.target.value));

    return (
        <div className="NumPad">
            {nums.map((e) => (
                <Button text={e} key={e} value={e} clickHandler={clickNumButton} />
            ))}
        </div>
    );
}

export default NumPad;
