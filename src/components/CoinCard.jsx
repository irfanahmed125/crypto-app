import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card>
        <CardMedia sx={{ height: 140 }} image={coin.large} />
        <CardContent>
          <Typography variant="h5" noWrap>
            {coin.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/coin/${coin.id}`}>
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CoinCard;
