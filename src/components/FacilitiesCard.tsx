import { Stack, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface CardProps {
  data: {
    img: string;
    title: string;
    infomation: string;
  }[];
}

const FacilitiesCard: React.FC<CardProps> = ({ data }) => {
  return (
    <Box>
      <Stack direction={"column"}>
        <Stack gap={5}>
          {data.map((iteam, idx) => (
            <Link
              to="/offers"
              key={idx}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Stack
                direction={"row"}
                gap={"100px"}
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
                  src={iteam.img}
                  alt={iteam.title}
                  style={{
                    width: "500px",
                    height: "250px",
                    borderRadius: "8px",
                  }}
                />
                <Stack gap={3} mt={5}>
                  <Typography variant="h4">{iteam.title}</Typography>
                  <Typography>{iteam.infomation}</Typography>
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
