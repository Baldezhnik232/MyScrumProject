
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Tasks, TaskStatus } from "../api/types/interfaceApi.tsx"
import { backlogMoksApi } from '../api/index';

export const fetchBacklog = createAsyncThunk<Tasks[]>('backlog/fetchBacklog', async () => {
    const response = await backlogMoksApi.getBacklog()
    return response
});

interface BacklogState {
    backlog: Tasks[],
    sprints: Tasks[],
    filterBacklog: string,
    loading: boolean,
    error: string | null
}

const initialState: BacklogState = {
    backlog: [],
    sprints: [],
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

        updateTaskStatus: (state, action: PayloadAction<{ tasksID: number, status: TaskStatus, sprintId: number }>) => {
            const { tasksID, status, sprintId   } = action.payload;
            
            const taskIndex = state.backlog.findIndex((backlog) => backlog.tasksID === tasksID);


            if (taskIndex !== -1 && sprintId) {

                const task = state.backlog[taskIndex];
                state.backlog.splice(taskIndex, 1);

                backlogMoksApi.removeTaskFromBacklog(tasksID);

            if (!state.sprints.some((t) => t.sprintId === sprintId)){
                state.sprints.push({
                    ...task,
                    status,
                    sprintId,
                 });
                 return
            }   
            }
        },
        updateTaskStatusSprints: (state, action: PayloadAction<{SprintTasksID: number, status: TaskStatus, sprintId: number}>): void => {
            const {SprintTasksID, status, sprintId} = action.payload;

            const sprintIndex = state.sprints.findIndex((task)=> task.tasksID === SprintTasksID)

            if(sprintIndex !== -1) {
                const sprint = state.sprints[sprintIndex]
                console.log("Удаляем из спринта:", state.sprints[sprintIndex]);
                state.sprints.splice(sprintIndex, 1)
                
                if(sprintId <= 0) {
                    console.log("Перемещаем в бэклог:", sprint);
                    state.backlog.push({
                        ...sprint
                    });
                 } else{
                        state.sprints.push({
                            ...sprint,
                            status,
                            sprintId
                        });
                    }
                } 
            }
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
export const { setFilterBacklog, addBacklogTask, updateTaskStatus, updateTaskStatusSprints } = backlogSlice.actions;
export default backlogSlice.reducer;
