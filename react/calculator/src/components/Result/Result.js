import './Result.css';

function Result(props) {
    return (
        <div className="Result">
            <span className="Result__Text">{props.result}</span>
        </div>
    );
}

export default Result;
