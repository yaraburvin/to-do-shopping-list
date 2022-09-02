import axios from "axios"
import { useState } from "react"



export function Form() : JSX.Element {
    const [todoInput, setTodoInput] = useState<string>("")
    const [dueDate, setDueDate] = useState<string>("")
    function addTask() {
        axios.post("http://localhost:4000/tasks", {
            task: todoInput.toLocaleString(),
            dueDate: dueDate
        }).then(() => setDueDate(""))
        .then(() => setTodoInput(""))
        .then(() => console.log("Posted hehe") )
        
    }
    
        
    return  (
        <div className="form">
            <label htmlFor="task"> Input Task</label>
            <input type="text" id="task" name="task" onChange={(e) => setTodoInput(e.target.value)} value={todoInput}/>
            <label htmlFor="dueDate"> Set a due date</label>
            <input type="date" id="dueDate" name="dueDate" onChange={(e) => setDueDate(e.target.value)} value={dueDate} />
            <button onClick={addTask}>Submit</button>
        </div>
    ) 
}