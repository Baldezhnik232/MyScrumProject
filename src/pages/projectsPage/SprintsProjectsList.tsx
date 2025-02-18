


import { Grid2, Typography } from "@mui/material";
import { SprintsPageItems } from "../projectsPage/SprintsProjectsPageItems";
import { useState, useEffect } from "react";
import { Sprint } from "../../api/interfaceApi";
import {sprintsMoksApi} from '../../api/index'
import {sprintsMoks} from '../../api/sprints.mock'
import { useParams } from "react-router-dom";
import {AppBreadcrumbs} from '../projectsPage/BreadcrumbsProjects'

export const AppSprintsList = ()=> {
  const {id} = useParams<{id:string}>()
  const [sprints, setSprints] = useState<Sprint[]>([])
  const [loading, setLoading] = useState<boolean>(true);

  const projectSprints = sprintsMoks.filter((sprints) => sprints.projectId.toString() === id);

  useEffect(() => {
    sprintsMoksApi.getSprints({})
      .then((data) => {
        const filteredSprints = data.filter((sprint) => sprint.id.toString() === id);
        setSprints(filteredSprints);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Typography align={'center'} >Загрузка...</Typography>;
 

  return (
    <>
    <AppBreadcrumbs />
      <Grid2 container spacing={2} sx={{mt:5}}>
        {projectSprints.map((sprints)=>(
          <SprintsPageItems key={sprints.id} sprints={sprints}/>
        ))}
      </Grid2>
    </>
  )

}