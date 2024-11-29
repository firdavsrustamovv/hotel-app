import Header from "../components/Header";
import { Stack, Box, Container, Typography, Divider } from "@mui/material";
import blog from "../images/blog.png";
import golf from "../images/gold.png";
import imgForBlog from "../images/imgForBlog.png";
import imgForBlog2 from "../images/imgForBlog2.png";
import BlogCard from "../components/BlogCard";
import bath from "../images/bath.png";
import supermarket from "../images/supermarket.png";
import webinar from "../images/webinar.png";

type Props = {};
const blogData = [
  {
    img: bath,
    title: "Bizda hammasi zamonaviy",
    infomation: "25 May 2023",
  },
  {
    img: supermarket,
    title: "Mehmonxona yaqinida ajoyib supermarketlar",
    infomation: "12 May 2023",
  },
  {
    img: webinar,
    title: "Vebinarlar uchun maxsus zallar",
    infomation: "15 Apr 2023",
  },
];

const Blog = (props: Props) => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${blog})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "450px",
          maxWidth: "1550px",
          width: "100%",
        }}
      >
        <Header />
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
          mt="150px"
        >
          <Container maxWidth="md">
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "bold",
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
                mb: 2,
              }}
            >
              Blog
            </Typography>
            <Divider sx={{ background: "white" }} />
          </Container>
        </Stack>
      </Box>
      <Container>
        <Box mt={"100px"}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
            gap={"20px"}
          >
            <Typography fontSize={"40px"}>
              Biz haqimizda barcha <br /> yangiliklardan xabardor bo'ling
            </Typography>
            <Typography fontSize={"20px"}>
              Ob'ektlar, tadbirlar va biz bilan bog'liq yangiliklardan <br />
              xabardor bo'ling biz taqdim etayotgan <br /> promolar, hammasi shu
              yerda
            </Typography>
          </Stack>
          <Divider sx={{ marginTop: "30px" }} />
        </Box>
        <Box mt={"100px"}>
          <Stack flexWrap={"wrap"} direction={"row"} gap={"10px"}>
            <Box
              sx={{
                backgroundImage: `url(${golf})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "479px",
                maxWidth: "700px",
                width: "100%",
                position: "relative",
              }}
            >
              <Stack position={"absolute"} top={370} left={40}>
                <Typography fontSize={"30px"} color="white">
                  Vebinar tadbiri Yoshlarning rivojlanishi uchun aqliy trening
                </Typography>
              </Stack>
            </Box>
            <Stack flexWrap={"wrap"} direction={"row"} gap={"10px"}>
              <img src={imgForBlog} alt="imgForBlog" />
              <img src={imgForBlog2} alt="imgForBlog2" />
            </Stack>
          </Stack>
        </Box>
        <Box mt={"100px"} height={"700px"}>
          <Stack>
            <BlogCard data={blogData} link="/blog" fontSize="15px" />
            <BlogCard data={blogData} link="/blog" fontSize="15px" />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
