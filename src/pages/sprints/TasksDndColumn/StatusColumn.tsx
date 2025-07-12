// import { useDroppable } from '@dnd-kit/core';
// import { Tasks, TaskStatus } from '../../../api/tasks/tasks.types';
// import { TaskSprintsItems } from '../TasksSprintsItems/TaskSprintsPage';
// import { Grid2, Typography } from '@mui/material';
// import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';

// interface StatusColumnProps {
//   id: string;
//   title: string;
//   status: TaskStatus;
//   tasks: Tasks[];
//   onMoveSprintTask: (SprintTasksID: number, status: TaskStatus, sprintId: number) => void;
//   onDeleteTask: (SprintTasksID: number) => void;
// }

// export const StatusColumn: React.FC<StatusColumnProps> = ({
//   title,
//   status,
//   tasks,
//   onMoveSprintTask,
//   onDeleteTask,
// }) => {
//   const { setNodeRef } = useDroppable({
//     id: status,
//   });

//   return (
//     <div
//       ref={setNodeRef}
//       style={{ minHeight: '200px', padding: '5rem' }}
//     >
//       <Typography
//         variant='h6'
//         sx={{ mb: 2 }}
//       >
//         {title}
//       </Typography>
//       <Grid2
//         container
//         spacing={2}
//         sx={{ border: 2, borderColor: 'error.main' }}
//       >
//         <SortableContext
//           items={tasks.map((task) => task.tasksID)}
//           strategy={horizontalListSortingStrategy}
//         >
//           {tasks.map((task) => (
//             <TaskSprintsItems
//               key={task.tasksID}
//               tasks={task}
//               onMoveSprintTask={onMoveSprintTask}
//               onDeleteTask={onDeleteTask}
//             />
//           ))}
//         </SortableContext>
//       </Grid2>
//     </div>
//   );
// };
