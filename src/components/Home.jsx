import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { addToTasks, updateToTasks } from '../redux/taskSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
    const [title, setTitle] = useState('');
    const [searchParams, setSearchParams] = useSearchParams('');
    const taskId = searchParams.get("taskId");
    const dispatch = useDispatch();
    function createTask() {
        const task = {
            title:title,
            _id:taskId || 
               Date.now().toString(36),
               createAt:new Date().toISOString(),
        }
        if (taskId) {
            //update
            dispatch(updateToTasks(task));
        }
        else{
            //create
            dispatch(addToTasks(task));
        }
        //after creation or updation
        setTitle('');
        setSearchParams({});
    }
  return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'>
        <input 
        className='p-2 rounded-2xl mt-2 w-[66%] pl-4'
        type="text"
        placeholder='Enter task here'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
        onClick={createTask}
        >
            {
                taskId ? "Update my task" : "Create my task"
            }
        </button>
      </div>
    </div>
  )
}

export default Home
