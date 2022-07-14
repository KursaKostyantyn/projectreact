import {useEffect, useState} from "react";
import {getAllTodos} from "../../services/todos.api.service";
import TodoComponent from "./todoComponent";

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