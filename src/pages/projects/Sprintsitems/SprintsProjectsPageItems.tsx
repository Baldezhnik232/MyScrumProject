// import { Sprint } from '../../../api/sprints/sprints.types.ts';
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
//   Grid2,
// } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { formDate } from '../../../api/sprints/sprints.mock.ts';
// import { Link } from 'react-router-dom';
// import { useAppDispatch } from '../../../store/hooks.ts';
// import { removeSprints } from '../../../store/sprints/sprints.slice.ts';
// import { sprintsMoksApi } from '../../../api/sprints/sprints.api.ts';

// interface SprintsProps {
//   sprints: Sprint;
// }

// export const SprintsPageItems = ({ sprints }: SprintsProps) => {
//   const dispatch = useAppDispatch();

//   const handleDeleteSprint = async (sprintId: number) => {
//     try {
//       await sprintsMoksApi.deleteSprintApi(sprintId);
//       dispatch(removeSprints(sprintId));
//     } catch (error) {
//       console.error('Ошибка удаления спринта:', error);
//     }
//   };

//   return (
//     <Grid2 size={4}>
//       <Card sx={{ minWidth: { xs: '8rem', sm: '6rem', md: '1rem', lg: '18rem', xl: '25rem' } }}>
//         <CardMedia
//           sx={{ minHeight: { xs: '7rem', sm: '8rem', md: '1rem', lg: '20rem', xl: '26rem' } }}
//           image='https://img.freepik.com/premium-photo/radiant-rhythms-exploring-neon-line-art-spectrum_1020495-70919.jpg?w=1060'
//         />
//         <CardContent sx={{ minWidth: '100%' }}>
//           <Typography
//             sx={{ fontSize: { xs: '0.8rem', sm: '1.2rem' } }}
//             gutterBottom
//             variant='h5'
//             component='div'
//           >
//             {sprints.title}
//           </Typography>
//           <Typography
//             sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem' } }}
//             gutterBottom
//             variant='h6'
//           >
//             {sprints.description}
//           </Typography>
//           <Typography
//             variant='body2'
//             sx={{ color: 'text.secondary', fontSize: { xs: '0.9rem', sm: '0.8rem' } }}
//           >
//             {formDate(sprints.timestamp)}
//           </Typography>
//         </CardContent>
//         <CardActions
//           sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start', overflow: 'hidden' }}
//         >
//           <Button
//             sx={{ fontSize: { xs: '0.6rem', sm: '0.6rem', lg: '0.75rem' }, minWidth: 'unset' }}
//             size='small'
//             component={Link}
//             to={`/project/${sprints.projectId}/sprints/${sprints.sprintId}`}
//           >
//             Learn More
//           </Button>
//           <Button
//             sx={{ display: 'flex', justifyContent: 'flex-start' }}
//             size='small'
//             onClick={() => handleDeleteSprint(sprints.sprintId)}
//           >
//             <DeleteIcon />
//           </Button>
//         </CardActions>
//       </Card>
//     </Grid2>
//   );
// };
