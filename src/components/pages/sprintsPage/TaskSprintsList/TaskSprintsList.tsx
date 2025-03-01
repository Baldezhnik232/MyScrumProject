

import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import {Tasks} from "../../../../api/interfaceApi"
import {tasksMocks} from "../../../../api/tasks.mock"
import { Grid2, Typography } from "@mui/material"
import {TaskSprintsItems} from '../../sprintsPage/TasksSprintsItems/TaskSprintsPage'
import {tasksMocksApi} from '../../../../api/index'
import {AppBreadcrumbs} from '../../projectsPage/RouterPanel/BreadcrumbsProjects'





export const AppTaskSprints = ()=> {
  const { id, sprintId } = useParams<{ id: string, sprintId: string }>(); 
  const [taskSpr, setTaskSpr] = useState<Tasks[]>([]);
  const [loading, setLoading] = useState<boolean>(true)


  useEffect(() => {
    tasksMocksApi.getTasks({})
    .then((data)=>{
      const filteredSprints = data.filter((task) => task.tasksID.toString() === sprintId);
      setTaskSpr(filteredSprints);
    })
   .then(()=> setLoading(false) ) 
  }, [sprintId]);



  if (loading) return <Typography align={'center'} >Loading...</Typography>;

  return (
    <>
    <AppBreadcrumbs showBacklogLink={false} />
      <Grid2 container spacing={2} sx={{ mt: 5 }}>
        {taskSpr.map((task) => (
          <TaskSprintsItems key={task.id} tasks={task} />
        ))}
      </Grid2>
    </>
  );
};
