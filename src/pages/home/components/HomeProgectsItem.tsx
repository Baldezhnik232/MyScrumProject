import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid2 } from "@mui/material"




const AppProgectsItem = () => {

  return (
    <Grid2 >
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 300 }}
      image="https://img.freepik.com/premium-photo/owl-with-mountain-glasses-it_899894-52387.jpg?w=826"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Progects 1
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Something....
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




export default AppProgectsItem