import { Stack, Box, Typography } from "@mui/material";

interface Data {
  id: number;
  name: string;
  img: string;
  title: string;
}
interface CardProps {
  data: Data[];
  links?: string;
}

const FacilitiesCard: React.FC<CardProps> = ({ data }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Stack gap={5}>
        {data.map((item) => (
          <Stack
            key={item.id}
            direction={{ xs: "column", md: "row" }}
            gap={4}
            alignItems={{ xs: "center", md: "flex-start" }}
            justifyContent={{ xs: "center", md: "space-between" }}
            sx={{
              transition: "transform 0.3s, box-shadow 0.3s",
              borderRadius: "8px",
              padding: "16px",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <img
              src={`img/${item.img}`}
              alt={item.title}
              loading="lazy"
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                borderRadius: "8px",
              }}
            />
            <Stack
              gap={3}
              textAlign={{ xs: "center", md: "left" }}
              alignSelf="center"
            >
              <Typography variant="h4">{item.name}</Typography>
              <Typography variant="h6" color="text.secondary">
                {item.title}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default FacilitiesCard;
