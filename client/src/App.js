import Header  from   './components/Header';
import Tasks   from   './components/Tasks';
import AddTask from   './components/AddTask';
import Footer  from    './components/Footer'  ;
import About  from    './components/About'  ;
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {useState, useEffect} from  'react';

function App() {

  const [showAddTask, setAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect( () => {

    const getTasks = async () =>{
      const taskFromServer = await fetchTasks()
      console.log(taskFromServer)
      setTasks(taskFromServer)
    }
    getTasks()

  },[]);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json();
    return data

  }

const deleteTask = async (id) =>{
await fetch(`http://localhost:5000/tasks/${id}`,{
  method :'DELETE'
})
setTasks(tasks.filter((item) => (item.id !==id )))
}

const onToggle = async (id) => {

  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle,
  level : !taskToToggle.level}

  const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    method  : 'PUT',
    headers : 
    {
    'Content-type' : 'application/json'
    },
    body : JSON.stringify(updTask)
  })
  const data = await res.json();

  setTasks(tasks.map((item) => 
  item.id ===id ? {...item, level : !item.level} : item

  ))
}

const addTask = async (value) =>{

  const res = await fetch('http://localhost:5000/tasks',{
    method: 'POST',
    headers : {
      'Content-type' : 'application/json'
    },
    body : JSON.stringify(value)
  })

  const data = await res.json()


 setTasks([...tasks,data])
}
    
  return (
    <Router>

<div className="container">

<Header onAdd = { () => setAddTask(!showAddTask)} statusText = {showAddTask}/>
{tasks.length>0 ? <Tasks tasks={tasks} onToggle = {onToggle} onDelete = {deleteTask}/> :'No Tasks to show'}
{showAddTask && <AddTask  addTask = {addTask}/>}
<Footer/>
<Route path='/about' component ={About} />

</div>
    </Router>
   
  );
}
export default App;