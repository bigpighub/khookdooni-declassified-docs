import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image, { StaticImageData } from "next/image";
import { Box } from "@mui/system";
function CaseShowcase(props: { name: string; photo: StaticImageData }) {
  return (
    <>
      <Card>
        <CardMedia sx={{ height: 280, position: "relative" }}>
          <Image src={props.photo} fill alt={props.name} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Read More</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default CaseShowcase;
