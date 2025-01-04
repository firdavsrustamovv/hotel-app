import { Stack, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

export interface Data {
  id?: number;
  img: string;
  title: string;
  infomation: string;
}

interface CardProps {
  data: Data[];
  link: string;
  fontSize?: string;
}

const DetailRoomCard: React.FC<CardProps> = ({ data, link, fontSize }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent={isSmallScreen ? "center" : "center"}
      gap={2}
    >
      {data.map((item) => (
        <Link
          to={`${link}/${item.id}`}
          key={item.id}
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          <Stack
            direction="column"
            sx={{
              cursor: "pointer",
              transition: "transform 0.3s, box-shadow 0.3s",
              borderRadius: "8px",
              padding: "5px",
              width: isSmallScreen ? "100%" : "350px",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                maxWidth: "350px",
                width: "100%",
                height: isSmallScreen ? "200px" : "240px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
            <Stack gap={1} mt={2}>
              <Typography
                fontSize={isSmallScreen ? "16px" : fontSize || "18px"}
                textAlign={"center"}
              >
                {item.title}
              </Typography>
              <Typography
                fontSize={isSmallScreen ? "14px" : "16px"}
                textAlign={"center"}
              >
                {item.infomation}
              </Typography>
            </Stack>
          </Stack>
        </Link>
      ))}
    </Stack>
  );
};

export default DetailRoomCard;
