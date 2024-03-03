
import React, {useState } from 'react'
import axios from 'axios'

function Create(){
    const [task, setTask] = useState()
    const  handleAdd = () =>{
        axios.post("http://localhost:3000/add", {task : task})
        .then(result=> console.log(result))
        .catch(err=>console.log(err))
    }
    return (
        <div className='create_form'>
            <input type="text" placeholder='enter task'  onChange={e=>setTask(e.target.value)}/>
            <button type='button'  onClick={handleAdd}>ADD</button>
        </div>
    )
}

export  default Create;