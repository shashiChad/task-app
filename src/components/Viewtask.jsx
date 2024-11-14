import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const Viewtask = () => {
  const {id} = useParams();
  const allTasks = useSelector((state) => state.task.tasks);
  const task = allTasks.filter((p) => p._id === id)[0];
      console.log("Final task: ", task);
  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
      <input
       className='p-2 rounded-2xl mt-2 w-[66%] pl-4'
       type='text'
       placeholder='Enter search here'
       value={task.title}
       disabled
       onChange={(e) => setTitle(e.target.value)}
      />
      
    </div>
    </div>
  )
}

export default Viewtask
