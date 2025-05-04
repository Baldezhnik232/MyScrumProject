import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid2 } from "@mui/material"
import {Project } from '../../../api/types/interfaceApi.ts'
import {formDate} from '../../../api/moks/projects.mock.ts'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppAuth } from '../HomeAuth/HomeAuth.tsx'
import { useAppSelector } from "../../../store/hooks.ts";

interface ProjectProps {
  project: Project
}

export const AppProjectsItem = ({project}: ProjectProps) => {
  const user = useAppSelector(state => state.auth.email);
  const navigate = useNavigate();
  const [openAuthDialog, setOpenAuthDialog] = useState(false);

  const handleLearnMore = () => {
    if (user) {
      navigate(`/project/${project.id}`);
    } else {
      setOpenAuthDialog(true);
    }
  };

  return (
    <Grid2 size={4} >
      <Card sx={{ minWidth: {xs:'3rem', sm:'2rem', md: '3rem', lg: '4rem', xl:'6rem' }}}>
      <CardMedia
        sx={{ minHeight: {xs: '8rem', sm:'12rem', md: '18rem', lg: '22rem', xl: '25rem'}}}
        image="https://img.freepik.com/premium-photo/owl-with-mountain-glasses-it_899894-52387.jpg?w=826"
      />
      <CardContent sx={{ width: {sx:'100%'}}}>
        <Typography sx={{fontSize:{xs:'1rem', sm:'1.5rem'}}}  gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography sx={{fontSize:{xs:'0.7rem', sm:'1.2rem'}}} gutterBottom variant="h6">{project.description}</Typography>
        <Typography   variant="body2" sx={{ color: 'text.secondary', fontSize:{xs:'0.6rem', sm:'1.1rem'} }}>
          {formDate(project.timestamp)}
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', flexWrap:'wrap', justifyContent: 'start', overflow: 'hidden'}}>
        <Button sx={{fontSize:{xs:'0.5rem', lg: '0.75rem', sm: '0.8rem' }, minWidth: 'unset'}} size="small"onClick={handleLearnMore}>Learn More</Button>
      </CardActions>
    </Card>
    <AppAuth
        open={openAuthDialog}
        setOpen={setOpenAuthDialog}
        onSuccess={() => navigate(`/project/${project.id}`)}
      />
  </Grid2>
  )
}




