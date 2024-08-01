import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const total = cartItems.reduce((p, c) => {
    return p + c.market_data.current_price.usd;
  }, 0);

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Typography variant="h4" align="center">
        Your Cart
      </Typography>

      <Grid container spacing={2} sx={{ margin: "20px 0px" }}>
        <Grid item sm={12} md={8}>
          {cartItems.map((coin) => (
            <CartItem key={coin.id} coin={coin} />
          ))}
        </Grid>

        <Grid item sm={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Total :
              </Typography>
              <Typography variant="h2">${total.toFixed(3)}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
