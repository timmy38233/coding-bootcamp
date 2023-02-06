import './TodoList.css';

function TodoList(props) {
    const deleteItem = (iTarget) => props.setTodos([...props.todos].filter((e, i) => i != iTarget));

    return (
        <ul className="TodoList">
            {props.todos.map((todo, i) => (
                <li key={i} className={`TodoItem--prio-${props.prios[todo.prio]}`}>
                    <span className="TodoItem__delete" onClick={(e) => deleteItem(i)}>✓</span>
                    <span className="TodoItem__title">{todo.text}</span>
                    <span className="TodoItem__date">{todo.date}</span>
                    <span className="TodoItem__prio">{props.prios[todo.prio]}</span>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
