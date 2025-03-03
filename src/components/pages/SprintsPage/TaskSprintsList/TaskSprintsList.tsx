

import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import {Tasks} from "../../../../api/types/interfaceApi.tsx"
import { Grid2, Typography } from "@mui/material"
import {TaskSprintsItems} from '../TasksSprintsItems/TaskSprintsPage'
import {tasksMocksApi} from '../../../../api/index'
import {AppBreadcrumbs} from '../../ProjectsPage/RouterPanel/BreadcrumbsProjects'

export const AppTaskSprints = ()=> {
  const { sprintId } = useParams<{ id: string, sprintId: string }>();
  const [taskSpr, setTaskSpr] = useState<Tasks[]>([]);
  const [loading, setLoading] = useState<boolean>(true)


  useEffect(():void => {
    tasksMocksApi.getTasks({})
    .then((data: Tasks[]):void=>{
      const filteredSprints: Tasks[] = data.filter((task: Tasks): boolean => task.tasksID.toString() === sprintId);
      setTaskSpr(filteredSprints);
    })
   .then(():void => setLoading(false) )
  }, [sprintId]);


  if (loading) return <Typography sx={{display:'flex', justifyContent: 'center', minHeight: '50vh' }} >Loading...</Typography>;

  return (
    <>
    <AppBreadcrumbs showBacklogLink={false} />
      <Grid2 container spacing={2} sx={{ mt: 5 }}>
        {taskSpr.map((task: Tasks) => (
          <TaskSprintsItems key={task.id} tasks={task} />
        ))}
      </Grid2>
    </>
  );
};
