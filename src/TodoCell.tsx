
import axios from "axios"
import {ITodo} from "./utils/types"

interface IToDO {
  todo : ITodo,
  function: (x: number) => void
}


export function ToDoCell(props : IToDO) : JSX.Element {
    
           
    return (  
        <tr key={props.todo.id}>
            <td><input type="checkbox" /></td>
            <td>{props.todo.task}</td>
            <td>{props.todo.duedate}</td>
            <td>{props.todo.creationdate}</td>
            <td><button className="btn"  onClick={() => props.function(props.todo.id)}>x</button></td>
        </tr>
    )
}