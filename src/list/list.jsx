import React, { Fragment, useState } from "react";

const TodoItem = ({todo, onRemove}) => {
    const [value, setValue] = useState(todo.text);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleRemove = () => {
        onRemove(todo.id);
    };

    return(
        <Fragment>
            <input type="text" value={value} onChange={handleChange} />
            <button onClick={handleRemove}>Remove</button>
        </Fragment>
    ) 
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

    const handleRemove = (id) => {
        console.log("Remove", id);
        
    }

    console.log(todos);
    

    return (
        <div>
            {todos.map((todo) =>(
            <TodoItem key = {todo.id} todo = {todo} onRemove= {handleRemove}/>  
            ))}
            <div>
                <button onClick={handleReorder}>Reorder</button>
            </div>
        </div>
    )
}