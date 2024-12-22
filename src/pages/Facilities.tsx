import FacilitiesCard from "../components/FacilitiesCard";
import Header from "../components/Header";
import facilities from "../images/facilities.png";
import { Box, Stack, Container, Typography, Divider } from "@mui/material";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState, useCallback } from "react";
import { startLoading, stopLoading } from "../slice/loaderSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import Loader from "../components/Loader";
interface Hotel {
  id: number;
  name: string;
  title: string;
  img: string;
}
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY as string;
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
const Facilities = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      dispatch(startLoading());
      const { data, error } = await supabase
        .from("hotelFacilities")
        .select("*");
      dispatch(stopLoading());
      if (error) {
        throw error;
      }
      setHotels(data || []);
    } catch (err: any) {
      console.error("Fetch error: ", err.message);
    }
  };
  useCallback(() => {
    fetchData();
  }, [hotels]);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box>
      {isLoading && <Loader />}
      <Box
        sx={{
          backgroundImage: `url(${facilities})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "450px",

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
              Qulayliklar
            </Typography>
            <Divider sx={{ background: "white" }} />
          </Container>
        </Stack>
      </Box>
      <Container>
        <Box mt={"100px"}>
          <Stack>
            <Typography variant="h4">Bizning qulayliklarimiz</Typography>
            <Divider sx={{ marginTop: "40px", background: "black" }} />
          </Stack>
          <Stack mt={"50px"} height={"100%"}>
            <FacilitiesCard data={hotels} />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Facilities;
