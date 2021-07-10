import React from "react"

function markChanged() {
    console.log('statechange')
}

function TodoItem (props) {
    return (
        <div className="todo-item">
            <input
                type="checkbox" checked={props.item.completed}
                onChange= {markChanged()}
            />
            <p>{props.item.text}</p>
        </div>
     )
}
 
export default TodoItem