import React, {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';

const Todolist= (props)=>{

    const [line, setLine] = useState(false);

    const lineThrough = () =>{
        setLine(true); 
    }

    return(
        <div className="list">
            <Fab size="small" color="danger" aria-label="delete" className="delete" onClick={lineThrough}>
                <DeleteIcon />
            </Fab>
            &emsp;<li style={{textDecoration:line?"line-through":"none"}}>{props.value}</li>
        </div>
    )
}

export default Todolist;