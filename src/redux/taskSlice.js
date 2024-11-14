import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';


const initialState = {
 tasks:localStorage.getItem("tasks")
 ? JSON.parse(localStorage.getItem("tasks"))
 : []
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addToTasks: (state,action) => {
     const task = action.payload;
     state.tasks.push(task);
     localStorage.setItem("tasks",JSON.stringify(state.tasks));
     toast.success("Task created successfully")
    },
    updateToTasks: (state,action) => {
        const task = action.payload;
        const index = state.tasks.findIndex((item) => item._id === task._id);

        if (index>=0){
            state.tasks[index] = task;
            localStorage.setItem("tasks",JSON.stringify(state.tasks));
            toast.success("Task updated successfully");
        }

    },
    resetAllTasks: (state, action) => {
       state.tasks = [];
       localStorage.removeItem("tasks");
    },
    removeFromTasks: (state,action) => {
        const taskId = action.payload;

        console.log(taskId);
        const index = state.tasks.findIndex((item) => item._id === taskId);

        if(index>=0){
            state.tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(state.tasks));
            toast.success("Task deleted successfully");
        }
    },
    toggleComplete: (state,action) => {
      const taskId = action.payload;
      const task = state.tasks.find((task) => task._id === taskId);
      if (task) {
        task.completed = !task.completed;
        
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToTasks, updateToTasks, resetAllTasks, removeFromTasks,toggleComplete  } = taskSlice.actions

export default taskSlice.reducer