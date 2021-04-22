import {FaTimes} from 'react-icons/fa';

const Task = ({data, onDelete, onToggle}) => {
    return (
        <div
        className = {`task ${data.level ? 'reminder' : ''}`}  // Not Clear
        onDoubleClick = {() => onToggle(data.id)}>

        <h3>{data.name}</h3>

        <FaTimes
        onClick = { () => onDelete(data.id)} 
        style ={{color : 'red', cursor:'pointer'}}
        />

        </div>
    )
}

export default Task
