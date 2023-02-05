import { useState } from 'react';

import TodoPriorities from './components/TodoPriorities/TodoPriorities.js';

import './TodoInputs.css';

function TodoInputs(props) {
    const [todoText, setTodoText] = useState('');
    const [todoDate, setTodoDate] = useState('');
    const [todoPrio, setTodoPrio] = useState(1);

    const onSubmit = e => {
        e.preventDefault();
        props.addTodo({
            text: todoText,
            date: todoDate,
            prio: todoPrio
        })

        setTodoText('');
    };

    return (
        <form className="TodoInputs" action="" onSubmit={onSubmit}>
            <input type="text" placeholder="Title…" value={todoText} onInput={e => setTodoText(e.target.value)} />
            <input type="date" onChange={e => setTodoDate(e.target.value)} />
            <TodoPriorities prios={props.prios} todoPrio={todoPrio} setTodoPrio={setTodoPrio} />
            <input type="submit" value="+" />
        </form>
    );
}

export default TodoInputs;