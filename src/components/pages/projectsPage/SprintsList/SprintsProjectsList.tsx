


import { Grid2, Typography } from "@mui/material";
import { SprintsPageItems } from "../Sprintsitems/SprintsProjectsPageItems";
import { useEffect } from "react";
import { RootState, AppDispatch } from "../../../../store";
import { useParams } from "react-router-dom";
import {AppBreadcrumbs} from '../RouterPanel/BreadcrumbsProjects'
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {fetchSprints} from "../../../../store/sprintsSlice"

export const AppSprintsList = ()=> {
  const {t} = useTranslation()
  const {id} = useParams<{id:string}>()
  const dispatch = useDispatch<AppDispatch>();

  const {sprints, loading} = useSelector((state:RootState)=> state.sprints)

  useEffect(() => {
   dispatch(fetchSprints())
  }, [dispatch]);

  const projectSprints = sprints.filter((sprints) => sprints.projectId.toString() === id);

  if (loading) return <Typography align={'center'} >{t('loading')}</Typography>;

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