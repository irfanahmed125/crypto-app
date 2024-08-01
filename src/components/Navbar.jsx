import { AppBar, Badge, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../features/auth/authSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <AppBar color="success">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h6">
          <Link to={"/"}>Crypto Mania</Link>
        </Typography>
        {!user ? (
          <>
            <Link to={"/login"}>
              <Button variant="contained" color="secondary" size="small">
                Login
              </Button>
            </Link>
            <Link to={"/register"}>
              <Button
                sx={{ margin: "0px 20px" }}
                variant="contained"
                color="secondary"
                size="small"
              >
                Register
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Badge
              sx={{ margin: "0px 20px" }}
              badgeContent={cartItems.length}
              color="error"
            >
              <Link to={"/cart"}>
                <Button variant="contained" color="secondary" size="small">
                  Cart <ShoppingCartIcon />
                </Button>
              </Link>
            </Badge>

            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
