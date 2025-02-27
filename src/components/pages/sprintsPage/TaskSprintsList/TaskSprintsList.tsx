

import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import {Sprint} from "../../../../api/interfaceApi"
import {sprintsMoks} from "../../../../api/sprints.mock"
import { Grid2 } from "@mui/material"
import {TaskSprintsItems} from '../../sprintsPage/TasksSprintsItems/TaskSprintsPage'




export const AppTaskSprints = ()=> {
  const { id } = useParams<{ id: string }>(); 
  const [taskSpr, setTaskSpr] = useState<Sprint[]>([]);


  useEffect(() => {
    const filteredSprints = sprintsMoks.filter((task) => task.projectId.toString() === id);
    setTaskSpr(filteredSprints);
  }, [id]);

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
