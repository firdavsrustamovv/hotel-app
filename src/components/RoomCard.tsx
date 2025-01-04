import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import BalconyIcon from "@mui/icons-material/Balcony";

interface RoomCardProps {
  title: string;
  price?: number;
  size?: number;
  beds?: number;
  bathrooms?: number;
  hasBalcony?: boolean;
  imageUrl: string;
}

export default function RoomCard({
  title,
  price,
  size,
  beds,
  bathrooms = 1,
  hasBalcony = true,
  imageUrl,
}: RoomCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 450,
        width: "100%",
        bgcolor: "background.paper",
        "@media (max-width: 600px)": {
          maxWidth: "100%",
        },
      }}
    >
      <CardMedia
        component="img"
        height="240"
        image={imageUrl}
        alt={title}
        sx={{
          objectFit: "cover",
          height: { xs: 200, md: 240 },
        }}
      />
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="500"
          sx={{
            fontSize: { xs: "1.2rem", md: "1.5rem" },
          }}
        >
          {title}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            mb: 2,
            flexWrap: "wrap",
            gap: "5px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <AspectRatioIcon fontSize="small" />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
            >
              {size}m²
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <BedIcon fontSize="small" />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
            >
              {beds} yotoq
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <BathtubIcon fontSize="small" />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
            >
              {bathrooms} hammom
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.5 }}>
          <Typography
            variant="h6"
            component="span"
            color="primary"
            fontWeight="600"
            sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
          >
            ${price}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
          >
            / Kun
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
