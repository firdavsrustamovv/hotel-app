import { Stack, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Data {
  img: string;
  title: string;
  infomation: string;
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
          {data.map((iteam, idx) => (
            <Link
              to={links}
              key={idx}
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
                  src={iteam.img}
                  alt={iteam.title}
                  style={{
                    width: "420px",
                    height: "100%",
                    borderRadius: "8px",
                  }}
                />
                <Stack gap={3} alignSelf={"center"}>
                  <Typography variant="h4">{iteam.title}</Typography>
                  <Typography variant="h6">{iteam.infomation}</Typography>
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
