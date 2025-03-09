
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Tasks, TaskStatus } from "../api/types/interfaceApi.tsx"
import { backlogMoksApi } from '../api/index';

export const fetchBacklog = createAsyncThunk<Tasks[]>('backlog/fetchBacklog', async () => {
    const response = await backlogMoksApi.getBacklog({})
    return response
});

interface BacklogState {
    backlog: Tasks[],
    tasks: Tasks[],
    filterBacklog: string,
    loading: boolean,
    error: string | null
}

const initialState: BacklogState = {
    backlog: [],
    tasks: [],
    filterBacklog: '',
    loading: false,
    error: null,
}

const backlogSlice = createSlice({
    name: 'backlog',
    initialState,
    reducers: {
        setFilterBacklog: (state, action: PayloadAction<string>) => {
            state.filterBacklog = action.payload
        },
        addBacklogTask: (state, action: PayloadAction<Tasks>) => {
            state.backlog.push(action.payload);
        },
        updateTaskStatus: (state, action: PayloadAction<{ id: number, tasksID: number, status: TaskStatus, sprintId: number }>) => {
            const { id, tasksID, status, sprintId  } = action.payload;
            
            const taskIndex = state.backlog.findIndex((task) => task.id === tasksID);

            if (taskIndex !== -1) {
                const task = state.backlog[taskIndex];

                state.backlog.splice(taskIndex, 1);

                state.tasks.push({
                    ...task,
                    id,
                    status,
                    sprintId 
                 });
            }
        },
    },
    extraReducers: (builder): void => {
        builder
            .addCase(fetchBacklog.pending, (state): void => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBacklog.fulfilled, (state, action): void => {
                state.backlog = action.payload;
                state.loading = false;
            })
            .addCase(fetchBacklog.rejected, (state, action): void => {
                state.loading = false;
                state.error = action.error.message || "Ошибка загрузки";
            });
    },
});
export const { setFilterBacklog, addBacklogTask, updateTaskStatus } = backlogSlice.actions;
export default backlogSlice.reducer;
