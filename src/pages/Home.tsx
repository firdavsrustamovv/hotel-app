import {
  Stack,
  Box,
  Container,
  Typography,
  InputLabel,
  FormControl,
  NativeSelect,
  Button,
  ImageList,
  ImageListItem,
  Divider,
} from "@mui/material";
import BackGroundPhoto from "../images/image.png";
import Header from "../components/Header";
import { useForm, SubmitHandler } from "react-hook-form";
import image1 from "../images/Image1.png";
import image2 from "../images/Image2.png";
import image3 from "../images/Image3.png";
import image4 from "../images/Image4.png";
import swimingPool from "../images/swimingPool.png";
import gym from "../images/gym.png";
import cafe from "../images/cafe.png";
import news from "../images/new.png";
import supermarket from "../images/supermarket.png";
import webinar from "../images/webinar.png";
import Quality from "../components/Quality";
import FacilitiesCard from "../components/FacilitiesCard";
import { Link } from "react-router-dom";
import BlogCard, { Data } from "../components/BlogCard";

const itemData = [
  { img: image1 },
  { img: image2 },
  { img: image3 },
  { img: image4 },
];
const facilitiesData = [
  {
    img: swimingPool,
    title: "Yopiq suzish havzasi",
    infomation:
      "It is a long established fact that a reader will be distracted by the readable content of a page",
  },
  {
    img: gym,
    title: "Sport zali mashg'ulot maydoni",
    infomation:
      "It is a long established fact that a reader will be distracted by the readable content of a page",
  },
  {
    img: cafe,
    title: "Kafe va restoran",
    infomation:
      "It is a long established fact that a reader will be distracted by the readable content of a page",
  },
];
const blogData = [
  {
    img: news,
    title: "Yangi imkoniyatlar: katta golf maydoni",
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

interface IFormInput {
  type: string;
  rooms: string;
}

const Home = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${BackGroundPhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "700px",
        }}
      >
        <Header />
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
          mt={"150px"}
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
              Eng qulay joyni topishga yordam beradi
            </Typography>
          </Container>
          <Stack
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            direction={"row"}
            justifyContent={"center"}
            flexWrap={"wrap"}
            mt={"60px"}
            gap={4}
            sx={{
              display: "flex",
              backgroundColor: "white",
              maxWidth: "500px",
              width: "100%",
              borderRadius: "10px",
            }}
            padding={2}
          >
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Xona Turi
                </InputLabel>
                <NativeSelect
                  {...register("type")}
                  defaultValue="Oddiy"
                  inputProps={{
                    name: "type",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value="Oddiy">Oddiy</option>
                  <option value="O'rtacha">O'rtacha</option>
                  <option value="Yaxshi">Yaxshi</option>
                </NativeSelect>
              </FormControl>
            </Box>

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Xonalar
                </InputLabel>
                <NativeSelect
                  {...register("rooms")}
                  defaultValue="1kishilik"
                  inputProps={{
                    name: "rooms",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value="1kishilik">1 kishilik</option>
                  <option value="2kishilik">2 kishilik</option>
                  <option value="3kishilik">3 kishilik</option>
                </NativeSelect>
              </FormControl>
            </Box>

            <Button
              sx={{ backgroundColor: "black" }}
              variant="contained"
              type="submit"
            >
              Qidirish
            </Button>
          </Stack>
        </Stack>
      </Box>

      <Container>
        <Box>
          <Stack
            mt={"100px"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Typography variant="h4">
              Eng yaxshi jozibasi bilan unutilmas dam olishdan rohatlaning
            </Typography>
            <Typography variant="h5">Eng yaxshi mehmonxonalar bizda</Typography>
          </Stack>
        </Box>
        <Box mt={"100px"}>
          <ImageList
            variant="masonry"
            gap={9}
            sx={{
              width: "70%",
              maxWidth: "700px",
              margin: "0 auto",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              overflow: "hidden",
            }}
          >
            {itemData.map((item, idx) => (
              <ImageListItem
                key={idx}
                sx={{
                  overflow: "hidden",
                  borderRadius: "8px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  },
                  img: {
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  },
                }}
              >
                <img src={item.img} alt={`Image ${idx}`} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>
      <Stack
        justifyContent={"center"}
        mt={"100px"}
        height={"300px"}
        sx={{ backgroundColor: "black" }}
      >
        <Quality />
      </Stack>
      <Container>
        <Box mt={"100px"}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="h4">
              To'liq va eng sifatli imkoniyatlardan rohatlaning
            </Typography>

            <Link to={"/facilities"}>
              <Button variant="contained" sx={{ background: "black" }}>
                {" "}
                Ko'proq
              </Button>
            </Link>
          </Stack>
          <Divider sx={{ marginTop: "50px", color: "black" }} />
          <Box mt={"50px"}>
            <Stack>
              <FacilitiesCard data={facilitiesData} links="/facilities" />
            </Stack>
          </Box>
          <Box mt={"50px"}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography variant="h4">Blog</Typography>

              <Link to={"/blog"}>
                <Button variant="contained" sx={{ background: "black" }}>
                  {" "}
                  Ko'proq
                </Button>
              </Link>
            </Stack>
            <Divider sx={{ marginTop: "20px" }} />
            <Box mt={5} height={"400px"}>
              <BlogCard data={blogData} link="/blog" fontSize="15px" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
