

import { useParams } from "react-router-dom"
import { sprintsMoks } from "../../api/sprints.mock";
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid2 } from "@mui/material"


export const ProjectsPage = () => {
  console.log(ProjectsPage, 'wdw')
    const {id}  = useParams<{id: string}>();
    const findSprints = sprintsMoks.find((spr) => spr.id.toString() === id)

    if (!findSprints) {
      return <Typography variant="h5" >Спринт не найден</Typography>
    }
  return (
    <Grid2 direction='row' spacing={2} >
      <Card sx={{ maxWidth: 200}}>
          <Typography variant="h5" >{findSprints.titleKey}</Typography>
          {findSprints.id === 1 && <Typography>Инфа о машинах</Typography>}
        </Card> 
      
    </Grid2>

  )


  


} 