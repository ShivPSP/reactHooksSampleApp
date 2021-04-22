import { useState } from 'react';

const AddTask = ({addTask}) => {

    
    const [name, setName] = useState('');
    const [level, setLevel] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 10000) + 1
        addTask({id,name,level})
        setName('');
        setLevel('')

    }

    return (
        <form className='add-form' >
            <div className='form-control'>
                <label>Name</label>
                <input type='text'
                    placeholder='Name of Task'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
            </div>

            <div className='form-control'>
                <label>Level</label>
                <input type='checkbox'
                    value={level}
                    checked={level}
                    onChange={(e) => setLevel(e.currentTarget.checked)}
                    ></input>
            </div>

            <input type = 'submit'
             value = 'Save Task' 
             onClick =  {onSubmit}></input>
         
        </form>
    )
}
export default AddTask
