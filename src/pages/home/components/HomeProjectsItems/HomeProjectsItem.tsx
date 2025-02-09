import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid2 } from "@mui/material"
import {Project} from './logicsHomeProjects/interfaceApi'
import { useTranslation } from "react-i18next"


interface ProjectProps {
  project: Project
}

export  const AppProjectsItem = ({project}: ProjectProps) => {
  const {t} = useTranslation();
  return (
    <Grid2 size={4} >
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://img.freepik.com/premium-photo/owl-with-mountain-glasses-it_899894-52387.jpg?w=826"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {t(project.titleKey)}
        </Typography>
        <Typography gutterBottom variant="h6">{t(project.description)}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {new Date(project.timestamp).toLocaleDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid2>
  )
}




