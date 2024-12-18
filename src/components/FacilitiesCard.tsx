import { Stack, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Data {
  id: number;
  name: string;
  img: string;
  title: string;
}
interface CardProps {
  data: Data[];
  links: string;
}

const FacilitiesCard: React.FC<CardProps> = ({ data, links }) => {
  return (
    <Box>
      <Stack direction={"column"} flexWrap={"wrap"}>
        <Stack gap={5}>
          {data.map((iteam) => (
            <Link
              to={links}
              key={iteam.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Stack
                direction={"row"}
                gap={"80px"}
                sx={{
                  cursor: "pointer",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  borderRadius: "8px",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <img
                  src={`img/${iteam.img}`}
                  alt={iteam.title}
                  style={{
                    width: "420px",
                    height: "100%",
                    borderRadius: "8px",
                  }}
                  loading="lazy"
                />
                <Stack gap={3} alignSelf={"center"}>
                  <Typography variant="h4">{iteam.name}</Typography>
                  <Typography variant="h6">{iteam.title}</Typography>
                </Stack>
              </Stack>
            </Link>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default FacilitiesCard;
