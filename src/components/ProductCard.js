import { Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function ProductCard() {
  function handleAddToCart(event) {
    console.log(`handle add to cart`);
  }

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="175" image="assets/vintage-camera.jpeg" alt="Vintage Camera"></CardMedia>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Laptop Asuse 1302
            </Typography>

            <Typography variant="body1" sx={{ color: "red", ml: 2 }}>
              97000Yen
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ mt: 1 }}>
            CPU 2800 I7 Intel
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 }}>
            RAM 16 GB DDR4
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 }}>
            VGA 3200 6GB
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body2">HDD 1TB + 256GB SSD</Typography>

            <IconButton aria-label="add to cart" color="inherit" sx={{ ml: 4 }} onClick={(event) => handleAddToCart()}>
              <AddShoppingCartIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default ProductCard;
