import React from "react";

const todolist= (props)=>{
    return(
        <div className="list">
            <button className="delete" onClick={()=>{
                props.onSelect(props.id)
            }}>x</button>&emsp;<li>{props.value}</li>
        </div>
    )
}

export default todolist;