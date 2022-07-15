import {useEffect, useState} from "react";

import {getAllTodos} from "../../services";
import TodoComponent from "./TodoComponent";

export default function TodosComponents() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getAllTodos.then(({data}) => setTodos([...data]))
    }, [])

    return (
        <div>
            {todos.map((todo, index) => <TodoComponent todo={todo} key={index}/>)}
        </div>
    )
}