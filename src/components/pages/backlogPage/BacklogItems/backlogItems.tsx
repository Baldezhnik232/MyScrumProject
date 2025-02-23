
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
          sx={{ height: 450 }}
          image="https://img.freepik.com/free-photo/futuristic-cat-with-goggles_23-2150969289.jpg?t=st=1740336490~exp=1740340090~hmac=3633235324c389c47cefa94780d0ddd6f82960702c6c1a10242b8f3ed32d4e7b&w=1480"
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