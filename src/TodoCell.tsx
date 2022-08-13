
import {ITodo} from "./utils/types"



export function ToDoCell(todo : ITodo) : JSX.Element {

    return (  
        <tr key={todo.id}>
            <td><input type="checkbox" /></td>
            <td>{todo.task}</td>
            <td>{todo.dueDate}</td>
            <td>{todo.creationDate}</td>
            <td><button className="btn">x</button></td>
        </tr>
    )
}