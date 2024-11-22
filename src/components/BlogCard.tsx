import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface CardProps {
  data: {
    img: string;
    title: string;
    infomation: string;
  }[];
}

const BlogCard: React.FC<CardProps> = ({ data }) => {
  return (
    <Stack direction="row" flexWrap="wrap" gap={2}>
      {data.map((item, idx) => (
        <Link
          to="/blog"
          key={idx}
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          <Stack
            direction="column"
            sx={{
              cursor: "pointer",
              transition: "transform 0.3s, box-shadow 0.3s",
              borderRadius: "8px",
              padding: "10px",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "350px",
                height: "240px",
                borderRadius: "8px",
              }}
            />
            <Stack gap={1} mt={2}>
              <Typography fontSize={"15px"}>{item.title}</Typography>
              <Typography>{item.infomation}</Typography>
            </Stack>
          </Stack>
        </Link>
      ))}
    </Stack>
  );
};

export default BlogCard;
