import { useState } from 'react';

import Result from './Result/Result';
import NumPad from './NumPad/NumPad';
import OperationPad from './OperationPad/OperationPad';

import './App.css';

function App() {
    const [previousResult, setPreviousResult] = useState(0);
    const [result, setResult] = useState(0);
    const [operation, setOperation] = useState('');

    return (
        <div className="CalculatorApp">
        <Result result={result} />
            <div className="CalculatorApp__LeftSide">
                <NumPad
                    result={result}
                    setResult={setResult}
                    setPreviousResult={setPreviousResult}
                />
            </div>
            <div className="CalculatorApp__RightSide">
                <OperationPad
                    result={result}
                    setResult={setResult}
                    previousResult={previousResult}
                    setPreviousResult={setPreviousResult}
                    operation={operation}
                    setOperation={setOperation}
                />
            </div>
        </div>
    );
}

export default App;
