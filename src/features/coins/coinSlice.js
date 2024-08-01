import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCoin, fetchTrendingCoins } from "./coinService";

const coinSlice = createSlice({
  name: "coins",
  initialState: {
    coins: [],
    coin: null,
    isLoading: false,
    isError: true,
    isSuccess: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrending.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(fetchTrending.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.coins = action.payload;
      })
      .addCase(fetchTrending.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(fetchSingleCoin.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(fetchSingleCoin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.coin = action.payload;
      })
      .addCase(fetchSingleCoin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

// Fetch Trending Coins

export const fetchTrending = createAsyncThunk("FETCH/TRENDING", async () => {
  try {
    return await fetchTrendingCoins();
  } catch (error) {
    console.log(error);
  }
});

// Fetch Trending Coins

export const fetchSingleCoin = createAsyncThunk("FETCH/COIN", async (id) => {
  try {
    return await fetchCoin(id);
  } catch (error) {
    console.log(error);
  }
});

export default coinSlice.reducer;
