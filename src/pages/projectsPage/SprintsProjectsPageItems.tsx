

import { useParams } from "react-router-dom"
import { sprintsMoks } from "../../api/sprints.mock";
import {Sprint} from '../../api/interfaceApi'
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid2 } from "@mui/material"
import {formDate} from '../../api/sprints.mock'


interface SprintsProps {
  sprints: Sprint 
}

export const SprintsPageItems = ({sprints}:SprintsProps) => {
  console.log(SprintsPageItems, 'wdw')
    return (
      <Grid2 size={4} >
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://img.freepik.com/premium-photo/radiant-rhythms-exploring-neon-line-art-spectrum_1020495-70919.jpg?w=1060"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {sprints.titleKey}
          </Typography>
          <Typography gutterBottom variant="h6">{sprints.description}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {formDate(sprints.timestamp)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" >Learn More</Button>
        </CardActions>
      </Card>
    </Grid2>

    )
} 