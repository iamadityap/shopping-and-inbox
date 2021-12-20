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
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    fetchData("url")
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
    return () => {
      setProducts([]);
    };
  }, []);

  function handleSort(sortOrder) {
    setSortOrder(sortOrder);
    let items = [];

    if (sortOrder === "low") {
      items = products.sort((a, b) => {
        return parseFloat(a.price) - parseFloat(b.price);
      });
    } else if (sortOrder === "high") {
      items = products.sort((a, b) => {
        return parseFloat(b.price) - parseFloat(a.price);
      });
    }

    setProducts(items);
  }

  function handleProceedOrder() {}

  return (
    <Box sx={{ p: 2 }}>
      <Grid container direction="row" justifyContent="center" alignItems="center" wrap="nowrap">
        <Grid item>
          <Button variant={sortOrder === "low" ? "outlined" : "text"} color="secondary" onClick={(event) => handleSort("low")} sx={{ mr: 1 }}>
            Low Price
          </Button>

          <Button variant={sortOrder === "high" ? "outlined" : "text"} color="secondary" onClick={(event) => handleSort("high")}>
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
