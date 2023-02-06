import { useState } from 'react';

import Button from '../Button/Button';

import './OperationPad.css';

function OperationPad(props) {
    const { result, setResult, previousResult, setPreviousResult, operation, setOperation } = props;

    const operations = ['/', '*', '-', '+', '='];
    const operationToFn = {
        '/': (a, b) => a / b,
        '*': (a, b) => a * b,
        '-': (a, b) => a - b,
        '+': (a, b) => a + b
    }

    const clickOpButton = (e) => {
        console.log(e.target.value);
        setPreviousResult(result);
        if (e.target.value != '=') {
            setResult(0);
            setOperation(e.target.value);
            return;
        }
        setResult(operationToFn[operation](previousResult, result));

    }

    return (
        <div className="OperationPad">
            {operations.map((e) => (
                <Button
                    text={e}
                    key={e}
                    value={e}
                    clickHandler={clickOpButton}
                    additionalClasses={['--operation']}
                />
            ))}
        </div>
    );
}

export default OperationPad;
