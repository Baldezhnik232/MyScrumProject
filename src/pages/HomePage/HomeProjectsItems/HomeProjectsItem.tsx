import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid2 } from "@mui/material"
import {Project } from '../../../api/types/interfaceApi.ts'
import {formDate} from '../../../api/moks/projects.mock.ts'
import { Link } from "react-router-dom"

interface ProjectProps {
  project: Project
}

export const AppProjectsItem = ({project}: ProjectProps) => {
  return (
    <Grid2 size={4} >
      <Card sx={{ width: {sx:300, sm:200, md: 300 }  }}>
      <CardMedia
        sx={{ height: {xs: 100, sm:200, md: 300}}}
        image="https://img.freepik.com/premium-photo/owl-with-mountain-glasses-it_899894-52387.jpg?w=826"
      />
      <CardContent sx={{ width: {sx:'100%'}}}>
        <Typography sx={{fontSize:{xs:'1rem', sm:'1.5rem'}}}  gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography sx={{fontSize:{xs:'0.7rem', sm:'1.5rem'}}} gutterBottom variant="h6">{project.description}</Typography>
        <Typography   variant="body2" sx={{ color: 'text.secondary', fontSize:{xs:'0.6rem', sm:'1.5rem'} }}>
          {formDate(project.timestamp)}
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', flexWrap:'wrap', justifyContent: 'start', overflow: 'hidden'}}>
        <Button sx={{fontSize:{xs:'0.5rem', lg: '0.75rem', sm: '1rem' }, minWidth: 'unset'}} size="small" component={Link} to={`/project/${project.id}`}>Learn More</Button>
      </CardActions>
    </Card>
  </Grid2>
  )
}




