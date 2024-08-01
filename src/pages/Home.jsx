import { Container, Grid, LinearProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CoinCard from "../components/CoinCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrending } from "../features/coins/coinSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { coins, isLoading, isError } = useSelector((state) => state.coins);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    dispatch(fetchTrending());
  }, [user]);

  if (isLoading) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <LinearProgress />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <Typography
          sx={{ margin: "20px 0px" }}
          variant="h5"
          align="center"
          color={"error"}
        >
          Something Went Wrong...
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Typography sx={{ marginBottom: "40px" }} align="center" variant="h3">
        Trending Crypto Coins
      </Typography>
      <Grid container spacing={2}>
        {coins.map((coin) => (
          <CoinCard coin={coin.item} key={coin.item.coin_id} />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
