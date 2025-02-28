

import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import {Tasks} from "../../../../api/interfaceApi"
import {tasksMocks} from "../../../../api/Tasks.mock"
import { Grid2, Typography } from "@mui/material"
import {TaskSprintsItems} from '../../sprintsPage/TasksSprintsItems/TaskSprintsPage'




export const AppTaskSprints = ()=> {
  const { id, sprintId } = useParams<{ id: string, sprintId: string }>(); 
  const [taskSpr, setTaskSpr] = useState<Tasks[]>([]);
  const [loading, setLoading] = useState<boolean>(true)


  useEffect(() => {
    const filteredSprints = tasksMocks.filter((task) => task.tasksID.toString() === sprintId);
    setTaskSpr(filteredSprints);
    setLoading(false) 
  }, [sprintId]);
  if (loading) return <Typography align={'center'} >Loading...</Typography>;


  return (
    <>
      <Grid2 container spacing={2} sx={{ mt: 5 }}>
        {taskSpr.map((task) => (
          <TaskSprintsItems key={task.id} tasks={task} />
        ))}
      </Grid2>
    </>
  );
};
