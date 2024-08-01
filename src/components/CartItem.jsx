import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../features/cart/cartSlice";

const CartItem = ({ coin }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h6" gutterBottom>
              {coin?.name}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Coin Price : $ {coin?.market_data.current_price.usd}
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleRemove(coin.id)}
          >
            Remove
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartItem;
