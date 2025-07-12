// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
//   Grid2,
//   Box,
// } from '@mui/material';
// import { formDate } from '../../../api/sprints/sprints.mock.ts';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useState } from 'react';
// import { TaskPopover } from '../TasksModal/TasksPopover.tsx';
// import { TaskStatus } from '../../../api/tasks/tasks.types.ts';
// import React from 'react';
// interface BacklogPageItemProps {
//   backlog: {
//     tasksID: number;
//     title: string;
//     storyPoints: number;
//     description: string;
//     timestamp: string;
//     isLegacy: boolean;
//     image?: File | null;
//   };
//   onMoveTask: (tasksID: number, status: TaskStatus, sprintId: number) => void;
// }

// export const BacklogPageItem: React.FC<BacklogPageItemProps> = ({ backlog, onMoveTask }) => {
//   const [isValide, setIsValide] = useState(true);

//   const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

//   const handleClose = () => {
//     setIsValide(false);
//   };

//   if (!isValide) {
//     return null;
//   }

//   const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClosePopover = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Grid2 size={4}>
//       <Card sx={{ minWidth: { sx: '3rem', sm: '8rem', md: '12rem', lg: '14rem', xl: '20rem' } }}>
//         {backlog.isLegacy ? (
//           <CardMedia
//             sx={{ minHeight: { xs: '3rem', sm: '14rem', md: '12rem', lg: '14rem', xl: '30rem' } }}
//             image={
//               'https://img.freepik.com/free-photo/futuristic-cat-with-goggles_23-2150969289.jpg?t=st=1740336490~exp=1740340090~hmac=3633235324c389c47cefa94780d0ddd6f82960702c6c1a10242b8f3ed32d4e7b&w=1480'
//             }
//           />
//         ) : backlog.image ? (
//           <CardMedia
//             sx={{ minHeight: { xs: '7rem', sm: '14rem', md: 300 } }}
//             image={URL.createObjectURL(backlog.image)}
//           />
//         ) : (
//           <Box
//             sx={{
//               height: { xs: '7rem', sm: '14rem', md: 300 },
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               backgroundColor: '#f0f0f0',
//             }}
//           >
//             <Typography
//               variant='body2'
//               color='text.secondary'
//             >
//               No Image
//             </Typography>
//           </Box>
//         )}
//         <CardContent sx={{ width: { sx: '100%' } }}>
//           <Typography
//             sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
//             gutterBottom
//             variant='h5'
//             component='div'
//           >
//             {backlog.title}
//           </Typography>
//           <Typography
//             sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
//             gutterBottom
//             variant='h6'
//           >
//             Story-points: {backlog.storyPoints}
//           </Typography>
//           <Typography
//             sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
//             gutterBottom
//             variant='h6'
//           >
//             {backlog.description}
//           </Typography>
//           <Typography
//             variant='body2'
//             sx={{ color: 'text.secondary', fontSize: { xs: '1rem', sm: '1.5rem' } }}
//           >
//             {formDate(backlog.timestamp)}
//           </Typography>
//         </CardContent>
//         <CardActions
//           sx={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             justifyContent: { xl: 'start' },
//             overflow: 'hidden',
//           }}
//         >
//           <Button
//             sx={{ fontSize: { xs: '0.4rem', lg: '0.75rem', sm: '1rem' }, minWidth: 'unset' }}
//             size='small'
//             onClick={handleOpenPopover}
//           >
//             Move
//           </Button>
//           <Button
//             sx={{ fontSize: { xs: '0.4rem', lg: '0.75rem', sm: '1rem' }, minWidth: 'unset' }}
//             size='small'
//           >
//             Learn More
//           </Button>
//           <Button
//             sx={{ display: ' flex', justifyContent: 'flex-start', minWidth: 'unset' }}
//             size='small'
//             onClick={handleClose}
//           >
//             <DeleteIcon />
//           </Button>
//         </CardActions>
//       </Card>
//       <TaskPopover
//         anchorEl={anchorEl}
//         onClose={handleClosePopover}
//         tasksID={backlog.tasksID}
//         onSave={(tasksID, status, sprintId) => onMoveTask(tasksID, status, sprintId)}
//       />
//     </Grid2>
//   );
// };
