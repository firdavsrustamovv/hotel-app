import { Stack, Box, Typography } from "@mui/material";

export interface Data {
  id?: number;
  img: string;
  title: string;
  infomation: string;
}

interface CardProps {
  data: Data[];
  fontSize: string;
  link?: string;
}

const BlogCard: React.FC<CardProps> = ({ data, fontSize }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      gap={3}
      sx={{ p: 2 }}
    >
      {data.map((item) => (
        <Box
          key={item.id || item.img}
          sx={{
            width: {
              xs: "100%",
              sm: "calc(50% - 16px)",
              md: "calc(33.33% - 16px)",
            },
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <img
            src={`img/${item.img}`}
            alt={item.title}
            loading="lazy"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <Box sx={{ p: 2 }}>
            <Typography
              fontSize="16px"
              fontWeight="600"
              sx={{
                mb: 1,
                color: "text.primary",
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              fontSize="14px"
              color="text.secondary"
              sx={{
                textAlign: "center",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
              }}
            >
              {item.infomation}
            </Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default BlogCard;
