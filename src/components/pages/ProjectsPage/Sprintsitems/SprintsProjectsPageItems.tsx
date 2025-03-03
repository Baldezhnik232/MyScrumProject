

import {Sprint} from '../../../../api/types/interfaceApi.tsx'
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid2 } from "@mui/material"
import {formDate} from '../../../../api/moks/sprints.mock.tsx'
import { Link } from "react-router-dom";


interface SprintsProps {
  sprints: Sprint 
}

export const SprintsPageItems = ({sprints}:SprintsProps) => {
    return (
      <Grid2 size={4} >
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://img.freepik.com/premium-photo/radiant-rhythms-exploring-neon-line-art-spectrum_1020495-70919.jpg?w=1060"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {sprints.title}
          </Typography>
          <Typography gutterBottom variant="h6">{sprints.description}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {formDate(sprints.timestamp)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" component={Link} to={`/Project/${sprints.projectId}/sprints/${sprints.id}`} >Learn More</Button>
        </CardActions>
      </Card>
    </Grid2>

    )
} 