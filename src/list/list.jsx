import React, { useState } from "react";

const TodoItem = ({todo}) => {
    const [value, setValue] = useState(todo.text);

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return <input type = "text" value={value} onChange = {handleChange}/>
}
export const List = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "Task 1" },
        { id: 2, text: "Task 2" },
        { id: 3, text: "Task 3" },
    ]);

    const handleReorder = () => {
        setTodos([...todos].reverse());
    };

    console.log(todos);
    

    return (
        <div>
            {todos.map((todo) =>(
            <TodoItem key = {todo.id} todo = {todo} />  
            ))}
            <button onClick = {handleReorder}>Reorder</button>
        </div>
    )
}