

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {tasksMocksApi} from "../api/index";
import {Tasks} from "../api/types/interfaceApi.tsx";

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async():  Promise<Tasks[]> =>{
    const response: Tasks[] = await tasksMocksApi.getTasks({})
    return response
})



interface TasksState {
    tasks: Tasks[]
    loading: boolean,
    error: string | null
}

const initialState: TasksState = {
    tasks: [],
    loading: false,
    error: null
}


const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Tasks>): void => {
            state.tasks.push(action.payload)

    },
    updateTaskSprint: (state, action: PayloadAction<{ tasksID: number, projectID: number }>): void => {
        const task = state.tasks.find((t) => t.tasksID === action.payload.tasksID)
        if (task) {
            task.tasksID = action.payload.projectID
        }
    },
    updateTaskStatus: (state, action: PayloadAction<{ taskId: number, status: TasksStatus }>) => {
        const task = state.tasks.find((t) => t.tasksID === action.payload.taskId);
        if (task) {
            task.status = action.payload.status;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
                state.loading = false;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Ошибка загрузки задач";
            });
    },
})

export const { addTask, updateTaskSprint, updateTaskStatus } = tasksSlice.actions;
export default tasksSlice.reducer