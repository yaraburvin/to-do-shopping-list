

export function Header(setButtonPopup: React.Dispatch<React.SetStateAction<boolean>>) : JSX.Element {
    
    return (
        <header>
            <button onClick={() => setButtonPopup(true)}>add a task</button>
            <button>sort by due date</button>
        </header>
    )
}