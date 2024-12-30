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
import Quality from "../components/Quality";
import FacilitiesCard from "../components/FacilitiesCard";
import { Link, useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState, useCallback } from "react";
import { startLoading, stopLoading } from "../slice/loaderSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import Loader from "../components/Loader";

const itemData = [
  { img: image1 },
  { img: image2 },
  { img: image3 },
  { img: image4 },
];

interface IFormInput {
  type: string;
}
interface Hotel {
  id: number;
  name: string;
  title: string;
  img: string;
}
interface Blog {
  id: number;
  infomation: string;
  title: string;
  img: string;
}
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY as string;
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

const Home = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [blogs, setBlog] = useState<Blog[]>([]);
  const { register, handleSubmit } = useForm<IFormInput>();
  const navigate = useNavigate();
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data.type);

  const fetchData = async () => {
    try {
      dispatch(startLoading());
      const { data, error } = await supabase
        .from("hotelFacilities")
        .select("*")
        .limit(3);
      dispatch(stopLoading());
      if (error) {
        throw error;
      }

      setHotels(data || []);
    } catch (err: any) {
      console.error("Fetch error: ", err.message);
    }
  };
  const fetchBlogData = async () => {
    try {
      dispatch(startLoading());
      const { data, error } = await supabase
        .from("blogForHotel")
        .select("*")
        .limit(3);
      dispatch(stopLoading());
      if (error) {
        throw error;
      }

      setBlog(data || []);
    } catch (err: any) {
      console.error("Fetch error: ", err.message);
    }
  };
  useCallback(() => {
    fetchData();
    fetchBlogData();
  }, [hotels, blogs]);
  useEffect(() => {
    fetchData();
    fetchBlogData();
  }, []);

  return (
    <Box>
      {isLoading && <Loader />}
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
              variant="h3"
              sx={{
                color: "white",
                fontWeight: "bold",
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
                mb: 2,
                fontSize: { xs: "50px", md: "60px" },
              }}
            >
              Eng qulay joyni topishga yordam beradi
            </Typography>
          </Container>

          <Stack
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            gap={{ xs: 2, sm: 3 }}
            sx={{
              backgroundColor: "white",
              marginTop: "20px",
              maxWidth: "450px",
              width: "80%",
              borderRadius: "12px",
              padding: "10px 25px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "400px",
              }}
            >
              <FormControl fullWidth>
                <InputLabel variant="filled" htmlFor="type-select">
                  Bizdagi mavjud xonalar
                </InputLabel>
                <NativeSelect
                  {...register("type")}
                  defaultValue="Oddiy"
                  inputProps={{
                    name: "type",
                    id: "type-select",
                  }}
                  sx={{
                    fontSize: { xs: "14px", sm: "16px" },
                    padding: "8px 12px",
                  }}
                >
                  <option value="Ota-onalar uchun">
                    Ota-onalar uchun xona
                  </option>
                  <option value="Bollalar uchun">Bollalar uchun xona</option>
                  <option value="Katta oila uchun">
                    Katta oila uchun xona
                  </option>
                  <option value="Lyuks xona">Lyuks xona</option>
                  <option value="Premium xona">Premium xona</option>
                  <option value="Premium Deluxe xona">
                    Premium Deluxe xona
                  </option>
                </NativeSelect>
              </FormControl>
            </Box>

            <Button
              sx={{
                backgroundColor: "black",
                color: "white",
                fontSize: { xs: "14px", sm: "16px" },
                padding: "8px 16px",
                borderRadius: "8px",
                textTransform: "none",
                width: { xs: "100%", sm: "auto", md: "150px" },
                maxWidth: "120px",
                ":hover": {
                  backgroundColor: "gray",
                },
              }}
              onClick={() => navigate("/rooms")}
              variant="contained"
              type="submit"
            >
              XONALAR
            </Button>
          </Stack>
        </Stack>
      </Box>

      <Container>
        <Box>
          <Stack
            mt={{ xs: "40px", sm: "60px", md: "100px" }}
            direction={{ xs: "column", sm: "row" }}
            justifyContent={{ xs: "center", sm: "space-between" }}
            alignItems={{ xs: "center", sm: "flex-start" }}
            gap={{ xs: 2, sm: 4 }}
            sx={{
              padding: { xs: "16px", sm: "24px" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "18px", sm: "24px", md: "40px" },
                textAlign: { xs: "center", sm: "left" },
                color: "#191818",
              }}
            >
              Eng yaxshi jozibasi bilan unutilmas dam olishdan rohatlaning
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "16px", sm: "20px", md: "28px" },
                textAlign: { xs: "center", sm: "left" },
              }}
              color="#7A7A7A"
            >
              Eng yaxshi mehmonxonalar bizda
            </Typography>
          </Stack>
        </Box>
        <Box mt={"40px"}>
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
        height={"auto"}
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
            gap={2}
          >
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "25px", md: "30px" } }}
            >
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
              <FacilitiesCard data={hotels} links="/facilities" />
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
            <Box mt={5} height={"auto"}>
              <BlogCard data={blogs} fontSize="14px" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
