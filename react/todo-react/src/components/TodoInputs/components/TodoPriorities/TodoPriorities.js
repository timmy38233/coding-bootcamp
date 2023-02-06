import './TodoPriorities.css';

function TodoPriorities(props) {

    return (
        <select className="TodoPriorities" defaultValue={props.todoPrio} onChange={e => props.setTodoPrio(e.target.value)}>
            {props.prios.map((prio, i) => <option value={i} key={i}>{prio}</option>)}
        </select>
    );
}

export default TodoPriorities;