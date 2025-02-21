
import {Backlog} from '../../../../api/interfaceApi';

import {Card, CardMedia, CardContent, Typography, CardActions, Button, Grid2} from '@mui/material'
import {formDate} from '../../../../api/sprints.mock'

interface BacklogProps {
  backlog: Backlog
}

export const BacklogPageItem = ({backlog}:BacklogProps ) => {

    return (
      <Grid2 size={4} >
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://img.freepik.com/premium-photo/radiant-rhythms-exploring-neon-line-art-spectrum_1020495-70919.jpg?w=1060"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {backlog.titleKey}
          </Typography>
          <Typography gutterBottom variant="h6" >
            Story-points: {backlog.storyPoints}
          </Typography>
          <Typography gutterBottom variant="h6">{backlog.description}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {formDate(backlog.timestamp)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" >Learn More</Button>
        </CardActions>
      </Card>
    </Grid2>




    )


}