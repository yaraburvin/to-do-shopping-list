import { ToDoCell } from "./TodoCell";
import "./App.css"
import { Header } from "./Header";
import axios from "axios"
import {ITodo} from "./utils/types"
import {useState} from "react"
import {Form} from "./Form"
import { useEffect } from "react";



  

function App(): JSX.Element {
  const [buttonPopup, setButtonPopup] = useState<boolean>(false)
  const [tasks, setTasks] = useState<ITodo[]>([])
  useEffect(() => {
    getData()
  },[tasks])
  const getData = () => {
    axios.get<ITodo[]>("http://localhost:4000/getData")
    .then((res) =>  setTasks(res.data))
    .catch(() => 
      console.log("Oh nooo!!!")
    )
    
  }
  return (
    <>
      {Header(setButtonPopup)}
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Task</th>
            <th>Due date</th>
            <th>Creation date</th>
            <th></th>
          </tr>
          { !(tasks===[]) && tasks.map(ToDoCell)}
          {tasks === [] && <tr><td className="no-data" colSpan={5}>No Tasks added yet</td></tr>}
      </tbody>
      </table>
      {buttonPopup === true &&
        <div className="popupWindow">
          {Form(setButtonPopup)}
        </div>
      }
    </>
  )
}

export default App;
