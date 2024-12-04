import React from "react";
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
  price = 500,
  size = 60,
  beds = 1,
  bathrooms = 1,
  hasBalcony = true,
  imageUrl,
}: RoomCardProps) {
  return (
    <Card sx={{ maxWidth: 400, bgcolor: "background.paper" }}>
      <CardMedia
        component="img"
        height="240"
        image={imageUrl}
        alt={title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="500">
          {title}
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <AspectRatioIcon fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              {size}m²
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <BedIcon fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              {beds} yotoq
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <BathtubIcon fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              {bathrooms} hammom
            </Typography>
          </Box>

          {hasBalcony && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <BalconyIcon fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                balkon
              </Typography>
            </Box>
          )}
        </Stack>

        <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.5 }}>
          <Typography
            variant="h6"
            component="span"
            color="primary"
            fontWeight="600"
          >
            ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            / Kun
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
