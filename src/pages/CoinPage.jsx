import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCoin } from "../features/coins/coinSlice";
import { add } from "../features/cart/cartSlice";

const CoinPage = () => {

  const { id } = useParams();

  const { coin, isLoading, isError } = useSelector((state) => state.coins);

  const [count, setCount] = useState (0);
  const dispatch = useDispatch();

  const handleAdd = (coin) => {
    if (count < 1) {
      setCount(1); 
      dispatch(add(coin));
    } else {
      window.alert("Item already added"); 
    }

  };

  useEffect(() => {
    dispatch(fetchSingleCoin(id));
  }, []);

  if (!coin || isLoading) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <LinearProgress />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <Typography align="center" variant="h3" color="error">
          Something Went Wrong..
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Typography variant="h4" align="center">
        {coin?.name} Coin Details Page
      </Typography>

      <Card sx={{ margin: "20px 0px" }}>
        <CardMedia image={coin?.image.large} sx={{ height: 240 }} />
        <CardContent>
          <Typography variant="h5" sx={{ margin: "20px 0px" }}>
            Coin Symbol : {coin?.symbol}
          </Typography>
          <Typography variant="h3" sx={{ margin: "20px 0px" }}>
            Coin Price : $ {coin?.market_data.current_price.usd}
          </Typography>
          <Typography
            dangerouslySetInnerHTML={{ __html: coin?.description.en }}
          ></Typography>
        </CardContent>
        <CardActions>
          <Link to={coin?.links.homepage[0]}>
            {" "}
            <Button endIcon={<LanguageIcon />} variant="contained" size="small">
              Visit Official Website
            </Button>
          </Link>
          <Button
            endIcon={<ShoppingCartIcon />}
            variant="contained"
            size="small"
            color="success"
            onClick={() => handleAdd(coin)}
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default CoinPage;
