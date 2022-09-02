import { ToDoCell } from "./TodoCell";
import "./App.css"
import { Header } from "./Header";
import axios from "axios"
import {ITodo} from "./utils/types"
import {useState} from "react"
import {Form} from "./Form"
import { useEffect } from "react";




function App(): JSX.Element {
  const [tasks, setTasks] = useState<ITodo[]>([])
  useEffect(() => {
    getData()
  },[tasks])
  const getData = () => {
    axios.get<ITodo[]>("http://localhost:4000/tasks")
    .then((res) =>  setTasks(res.data))
    .catch(() => 
      console.log("Oh nooo!!!")
    )
  }
 
function removeTask (TaskId: number) {
  axios.delete(`http://localhost:4000/tasks/${TaskId}`)
  .then(() => console.log("Yay"))
  .catch(() => 
  console.log("Oh nooo!!!")
)}
  return (
    <>
      {Header()}
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Task</th>
            <th>Due date</th>
            <th>Creation date</th>
            <th></th>
          </tr>
          {tasks.map((e) => <ToDoCell todo={e} function={removeTask} key={e.id}/>)}
          
      </tbody>
      </table>
        <div className="popupWindow">
          {Form()}
        </div>
      
    </>
  )
}

export default App;
