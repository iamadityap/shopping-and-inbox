import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import SearchInput from "../../components/SearchInput";
import { fetchData } from "../../utils/api-client";

const gridStyles = {
  m: 2,
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  rowGap: 2,
  columnGap: 2,
};

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData("url")
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  });

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

      <Box sx={products.length > 0 ? gridStyles : {}}>
        {products.length > 0 ? (
          products.map((item) => <ProductCard product={item} />)
        ) : (
          <Typography sx={{ textAlign: "center", p: 1 }}>There are no products available at present.</Typography>
        )}
      </Box>
    </Box>
  );
}

export default Shop;
