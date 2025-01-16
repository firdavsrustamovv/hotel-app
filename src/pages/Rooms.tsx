import {
  Stack,
  Typography,
  Box,
  Container,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "../components/Header";
import roomBackground from "../images/room.png";
import premiumGrandDeluxeRoom from "../images/premiumGrandDeluxeRoom.png";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState, useCallback } from "react";
import DetailRoomCard from "../components/DetailRoomCard";
import { startLoading, stopLoading } from "../slice/loaderSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import Loader from "../components/Loader";

interface Rooms {
  id: number;
  infomation: string;
  title: string;
  img: string;
}

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY as string;
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

const Rooms = () => {
  const [rooms, setRooms] = useState<Rooms[]>([]);
  const [nextRooms, setNextRooms] = useState<Rooms[]>([]);
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const fetchData = async () => {
    try {
      dispatch(startLoading());
      const { data, error } = await supabase
        .from("roomsForHotel")
        .select("*")
        .range(0, 2);
      dispatch(stopLoading());
      if (error) {
        throw error;
      }

      setRooms(data || []);
    } catch (err: any) {
      console.error("Fetch error: ", err.message);
    }
  };

  const fetchNextData = async () => {
    try {
      dispatch(startLoading());
      const { data, error } = await supabase
        .from("roomsForHotel")
        .select("*")
        .range(3, 10);
      dispatch(stopLoading());
      if (error) {
        throw error;
      }

      setNextRooms(data || []);
    } catch (err: any) {
      console.error("Fetch error: ", err.message);
    }
  };

  useCallback(() => {
    fetchData();
    fetchNextData();
  }, [rooms, nextRooms]);

  useEffect(() => {
    fetchData();
    fetchNextData();
  }, []);

  return (
    <Box>
      {isLoading && <Loader />}
      <Box
        sx={{
          backgroundImage: `url(${roomBackground})`,
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
            mt: isSmallScreen ? "100px" : "150px",
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "bold",
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
                mb: 2,
                fontSize: "50px",
              }}
            >
              Xonalar
            </Typography>
            <Divider sx={{ background: "white" }} />
          </Container>
        </Stack>
      </Box>

      <Container>
        <Box>
          <Stack mt={isSmallScreen ? "50px" : "100px"}>
            <Typography
              sx={{
                fontSize: isSmallScreen ? "24px" : "36px",
                textAlign: "center",
              }}
            >
              Bizning qulay va hamma sharoitlarga <br /> ega xonalarimizda dam
              oling
            </Typography>
          </Stack>
          <Box mt="50px">
            <DetailRoomCard data={rooms} link={`/rooms`} fontSize="20px" />
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          marginTop: "100px",
          backgroundImage: `url(${premiumGrandDeluxeRoom})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
          width: "100%",
          position: "relative",
        }}
      >
        <Container>
          <Box sx={{ position: "absolute", bottom: 40 }}>
            <Stack
              sx={{
                textAlign: isSmallScreen ? "center" : "left",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
                  mb: 2,
                  fontSize: isSmallScreen ? "20px" : "32px",
                }}
              >
                Premium Grand xonalarimizdan biri
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
                  fontSize: isSmallScreen ? "16px" : "24px",
                }}
              >
                85 m² 2 yotoqxona 2 hammom 2 Suzish maydoni
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          marginTop: "50px",
          padding: "20px",
          height: "auto",
        }}
      >
        <Container>
          <DetailRoomCard data={nextRooms} link={`/rooms`} fontSize="20px" />
        </Container>
      </Box>
    </Box>
  );
};

export default Rooms;
