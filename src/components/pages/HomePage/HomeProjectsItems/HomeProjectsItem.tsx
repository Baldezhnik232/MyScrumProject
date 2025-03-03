import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid2 } from "@mui/material"
import {Project } from '../../../../api/types/interfaceApi.tsx'
import {formDate} from '../../../../api/moks/projects.mock.tsx'
import { Link } from "react-router-dom"

interface ProjectProps {
  project: Project
}

export const AppProjectsItem = ({project}: ProjectProps) => {
  return (
    <Grid2 size={4} >
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://img.freepik.com/premium-photo/owl-with-mountain-glasses-it_899894-52387.jpg?w=826"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography gutterBottom variant="h6">{project.description}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {formDate(project.timestamp)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" component={Link} to={`/project/${project.id}`}>Learn More</Button>
      </CardActions>
    </Card>
  </Grid2>
  )
}




