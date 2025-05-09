import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Backlog } from '../../api/backlog/backlog.types.ts';
import { TaskStatus } from '../../api/tasks/tasks.types.ts';
import { fetchBacklog } from './backlog.thunk.ts';
import { backlogMoksApi } from '../../api/backlog/backlog.api.ts';
import { BacklogState } from './backlog.types.ts';

const initialState: BacklogState = {
  backlog: [],
  sprints: [],
  filterBacklog: '',
  loading: false,
  error: null,
};

const backlogSlice = createSlice({
  name: 'backlog',
  initialState,
  reducers: {
    setFilterBacklog: (state, action: PayloadAction<string>) => {
      state.filterBacklog = action.payload;
    },
    addBacklogTask: (state, action: PayloadAction<Backlog>) => {
      state.backlog.push(action.payload);
    },

    updateTaskStatus: (
      state,
      action: PayloadAction<{ tasksID: number; status: TaskStatus; sprintId: number }>
    ) => {
      const { tasksID, status, sprintId } = action.payload;

      const taskIndex = state.backlog.findIndex((backlog) => backlog.tasksID === tasksID);

      if (taskIndex !== -1 && sprintId) {
        const task = state.backlog[taskIndex];
        state.backlog.splice(taskIndex, 1);

        backlogMoksApi.removeTaskFromBacklog(tasksID);

        state.sprints.push({
          ...task,
          status,
          sprintId,
        });
        return;
      }
    },
    updateTaskStatusSprints: (
      state,
      action: PayloadAction<{ SprintTasksID: number; status: TaskStatus; sprintId: number }>
    ): void => {
      const { SprintTasksID, status, sprintId } = action.payload;

      const sprintIndex = state.sprints.findIndex((task) => task.tasksID === SprintTasksID);

      if (sprintIndex !== -1) {
        const sprint = state.sprints[sprintIndex];
        state.sprints.splice(sprintIndex, 1);

        if (sprintId <= 0) {
          state.backlog.push({
            ...sprint,
          });
        } else {
          state.sprints.push({
            ...sprint,
            status,
            sprintId,
          });
        }
      }
    },
    removeTaskFromSprint: (state, action: PayloadAction<number>) => {
      const taskId = action.payload;
      const index = state.sprints.findIndex((task) => task.tasksID === taskId);
      if (index !== -1) {
        state.sprints.splice(index, 1);
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
        state.error = action.error.message || 'Ошибка загрузки';
      });
  },
});
export const {
  setFilterBacklog,
  addBacklogTask,
  updateTaskStatus,
  updateTaskStatusSprints,
  removeTaskFromSprint,
} = backlogSlice.actions;
export default backlogSlice.reducer;
