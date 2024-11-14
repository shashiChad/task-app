import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromTasks, toggleComplete } from '../redux/taskSlice';

const Task = () => {
    const tasks = useSelector((state) => state.task.tasks)
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const filteredData = tasks.filter(
    (task) => task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    function handleDelete (taskId) {
      dispatch(removeFromTasks(taskId));
    }
   function handleCompleteClick (taskId) {
      dispatch(toggleComplete(taskId));
    }
  
  return (
    <div>
      <input
      className='p-2 rounded-2xl min-w-[600px] mt-5'
      type='search'
      placeholder='Please search here'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='flex flex-col gap-5 mt-5'>
        {
            filteredData.length > 0 && 
            filteredData.map(
                (task) => {
                    return (
                        <div className='border'>
                            <div>
                                {task.title}
                                </div>
                                <div className='flex flex-row gap-4 place-content-evenly'>
                                  <button>
                                    <a href={`/?taskId = ${task?._id}`}>
                                    Edit
                                    </a>
                                  </button>
                                  <button onClick={() => handleDelete (task?._id)}>
                                    Delete
                                  </button>
                                  <button>
                                    <a href={`/tasks/${task?._id}`}>
                                    View
                                    </a>
                                  </button>
                                  
                                </div>
                                
                                <div
                                className={`${
                                  task.completed ? 'line-through text-gray-400' : ''
                                }`}
                                >
                                  <input
                                  type="checkbox"
                                  checked={task.completed}
                                  onChange={() => handleCompleteClick(task._id)}
                                  />
                                  {task.completed ? 'Completed' : 'Not complete'}
                                </div>
                            </div>
                    )
                }
            )
        }

      </div>
    </div>
  )
}

export default Task
