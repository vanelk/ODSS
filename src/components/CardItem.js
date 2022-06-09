import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardItem({ image, title, price }) {
    return (
        <Card sx={{ maxWidth: '100%' }}>
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
                        <Typography variant="body2" color="text.secondary">
                            Price: {price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                <Link to="/list">
                    <Button>Add to list</Button>
                </Link>
            </CardActions>
        </Card>)
}