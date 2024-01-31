import React from "react";
import "./test.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard() {
  return (
    <div className="main">
      {/* first Card */}
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="assets/crowdfunding.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Givingly
          </Typography>
          <Typography variant="body2" color="text.secondary">
            An online crowdfunding app enables users to create campaigns and
            raise funds for diverse projects, businesses, or causes.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Build with: NEXT js, Firebase
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      {/* second Card */}
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="assets/crowdfunding.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      {/* third Card */}
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="assets/crowdfunding.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      {/* fourth Card */}
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="assets/crowdfunding.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
