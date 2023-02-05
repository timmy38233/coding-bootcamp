import { useState } from 'react';
import './TodoSort.css';

function TodoSort(props) {
    const indicatorToIcon = ['↓', '↑', '-'];
    const [sortIndicator, setSortIndicator] = useState(2);

    const onClick = (e) => {
        setSortIndicator((sortIndicator + 1) % 2);
        props.setTodos(
            [...props.todos].sort(
                (a, b) => (-1) ** sortIndicator * (a[props.keyName] - b[props.keyName])
            )
        );
    };

    return (
        <div className="TodoSort" onClick={onClick}>
            Sort by prio: {indicatorToIcon[sortIndicator]}
        </div>
    );
}

export default TodoSort;
