import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import { Drink } from "../../types";

interface DrinkMenuProps {
  title: string;
  drinks: Drink[];
}

const DrinkMenu: React.FC<DrinkMenuProps> = ({ title, drinks }) => {
  const theme = useTheme();

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: theme.palette.primary.contrastText,
          textAlign: "center",
          marginTop: 2,
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 3,
          marginTop: 2,
        }} 
      >
        {drinks.map((drink, index) => (
          <Card key={index}>
            <CardMedia
              component="img"
              image={drink.image}
              alt={drink.title}
              sx={{ objectFit: "contain", height: 200 }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {drink.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {drink.volume}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Prix : {drink.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default DrinkMenu;