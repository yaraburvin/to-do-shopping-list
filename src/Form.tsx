export function Form(setButtonPopup : React.Dispatch<React.SetStateAction<boolean>>) : JSX.Element {
    return  (
        <form className="orm">
            <label htmlFor="task"> Input Task</label>
            <input type="text" id="task" name="task"/>
            <label htmlFor="dueDate"> Set a due date</label>
            <input type="date" id="dueDate" name="dueDate"/>
            <button type ="submit" onClick={() => setButtonPopup(false)}>Submit</button>
        </form>
    ) 
}