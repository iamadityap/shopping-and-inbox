import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Grid } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import SearchInput from "../../components/SearchInput";

function Shop() {
  function handleSort(sortOrder) {
    console.log(`sort order ${sortOrder}`);
  }

  function handleProceedOrder() {
    console.log(`handle orders`);
  }

  return (
    <Box sx={{ p: 2 }}>
      <Grid container direction="row" justifyContent="center" alignItems="center" wrap="nowrap">
        <Grid item>
          <Button variant="outlined" color="secondary" onClick={(event) => handleSort("low")} sx={{ mr: 1 }}>
            Low Price
          </Button>

          <Button variant="outlined" color="secondary" onClick={(event) => handleSort("high")}>
            High Price
          </Button>
        </Grid>

        <Grid item>
          <SearchInput />
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            endIcon={<ShoppingCartIcon sx={{ ml: 1, p: 0.5 }} />}
            onClick={(event) => handleProceedOrder(event)}
          >
            Proceed Order
          </Button>
        </Grid>
      </Grid>

      <Box
        sx={{
          m: 2,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          rowGap: 2,
          columnGap: 2,
        }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Box>
    </Box>
  );
}

export default Shop;
