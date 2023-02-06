import './Result/Result';
import './NumPad/NumPad';
import './OperationPad/OperationPad';

import './App.css';

function App() {
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState('');

  return (
    <div className="CalculatorApp">
      <div className="CalculatorApp__LeftSide">
        <Result />
        <NumPad />
      </div>
      <div className="CalculatorApp__RightSide">
        <OperationPad />
      </div>
    </div>
  );
}

export default App;
