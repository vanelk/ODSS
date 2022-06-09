import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardItem({image, title}) {
    return (
        <Card sx={{ width: 200 }}>
            <Link to="/item">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="product item"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            </Link>
            <CardActions>
                <Button>Add to list</Button>
            </CardActions>
        </Card>)
}