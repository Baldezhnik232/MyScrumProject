// import { useEffect } from 'react';
// import { Grid2, Typography, Box } from '@mui/material';
// import { AppProjectsItem } from './HomeProjectsItem.tsx';
// import { Project } from '../../../../api/projects/projects.types.ts';
// import AppSearch from '../home-search/HomeSearch.tsx';
// import { useAppSelector, useAppDispatch } from '../../../../store/hooks.ts';
// import { fetchProjects } from '../../../../store/projects/projects.thunk.ts';
// import {
//   selectProjectsItems,
//   selectProjectsFiltered,
//   selectProjectsLoading,
//   selectProjectError,
// } from '../../../../store/projects/projects.selector.ts';
// import { useTranslation } from 'react-i18next';

// export const AppProjectsList: React.FC = () => {
//   const { t } = useTranslation();

//   const dispatch = useAppDispatch();
//   useEffect((): void => {
//     dispatch(fetchProjects());
//   }, [dispatch]);

//   const projects = useAppSelector(selectProjectsItems);
//   const filterProject = useAppSelector(selectProjectsFiltered);
//   const loading = useAppSelector(selectProjectsLoading);
//   const error = useAppSelector(selectProjectError);

//   const filterProjects = projects.filter((project) =>
//     project.title.toLocaleLowerCase().includes(filterProject.toLocaleLowerCase())
//   );

//   if (loading)
//     return (
//       <Typography sx={{ display: 'flex', justifyContent: 'center', minHeight: '50vh' }}>
//         {' '}
//         {t('loading')}{' '}
//       </Typography>
//     );

//   if (error)
//     return (
//       <Typography align={'center'}>
//         {' '}
//         {t('error')}:{error}{' '}
//       </Typography>
//     );

//   return (
//     <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
//       <Grid2
//         container
//         spacing={2}
//         sx={{
//           mt: { xs: '0.5rem' },
//           ml: { xs: '0.2rem', sm: '1.5rem', md: '1.4rem', lg: '1.2rem', xl: '1rem' },
//         }}
//       >
//         <AppSearch />
//         {filterProjects.length > 0 ? (
//           filterProjects.map((project: Project) => (
//             <AppProjectsItem
//               key={project.id}
//               project={project}
//             />
//           ))
//         ) : (
//           <Typography sx={{ display: 'flex', justifyContent: 'center' }}>
//             {t('homeSearch.projectsFind')}
//           </Typography>
//         )}
//       </Grid2>
//     </Box>
//   );
// };
