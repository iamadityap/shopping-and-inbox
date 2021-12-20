import { Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function ProductCard({ product }) {
  function handleAddToCart(event) {
    console.log(`handle add to cart`);
  }

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="175" image={product.productImage} alt="Vintage Camera"></CardMedia>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {product.productName}
            </Typography>

            <Typography variant="body1" sx={{ color: "red", ml: 2 }}>
              {product.price}Yen
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ mt: 1 }}>
            {product.cpu_model}
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 }}>
            {product.ram_model}
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 }}>
            {product.vga_model}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body2">{product.hdd_model}</Typography>

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
