import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Stack,
  Container,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import roomBackground from "../images/room.png";
import detailRoom1 from "../images/detailRoom1.png";
import detailRoom2 from "../images/detailRoom2.png";
import Header from "../components/Header";
import PhoneIcon from "@mui/icons-material/Phone";
import BathtubIcon from "@mui/icons-material/Bathtub";
import ShowerIcon from "@mui/icons-material/Shower";
import WifiIcon from "@mui/icons-material/Wifi";
import TvIcon from "@mui/icons-material/Tv";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { useEffect, useState, useCallback } from "react";
import DetailRoomCard from "../components/DetailRoomCard";
import { startLoading, stopLoading } from "../slice/loaderSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import Loader from "../components/Loader";
interface OtherRooms {
  id: number;
  infomation: string;
  title: string;
  img: string;
}

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY as string;
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

const DetailRooms = () => {
  const { id } = useParams<{ id: string }>();
  const [room, setRoom] = useState<any>([]);
  const [otherRoom, setOtherRoom] = useState<OtherRooms[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const userToken = localStorage.getItem("token");
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      dispatch(startLoading());
      const { data, error } = await supabase
        .from("roomsForHotel")
        .select("*")
        .eq("id", id);
      dispatch(stopLoading());
      if (error) {
        throw error;
      }

      setRoom(data[0] || []);
    } catch (err: any) {
      console.error("Fetch error: ", err.message);
    }
  };
  const fetchOtherRoomData = async () => {
    try {
      dispatch(startLoading());
      const { data, error } = await supabase
        .from("roomsForHotel")
        .select("*")
        .range(3, 5);
      dispatch(stopLoading());
      if (error) {
        throw error;
      }

      setOtherRoom(data || []);
    } catch (err: any) {
      console.error("Fetch error: ", err.message);
    }
  };
  useCallback(() => {
    fetchData();
    fetchOtherRoomData();
  }, [room, otherRoom]);
  useEffect(() => {
    fetchData();
    fetchOtherRoomData();
  }, [id]);

  const facilities = [
    { icon: <PhoneIcon fontSize="large" />, label: "Telefon" },
    { icon: <BathtubIcon fontSize="large" />, label: "Hammom" },
    { icon: <ShowerIcon fontSize="large" />, label: "Do'sh" },
    { icon: <WifiIcon fontSize="large" />, label: "Tezkor Wifi" },
    { icon: <TvIcon fontSize="large" />, label: "LCD Televizor" },
    { icon: <CoffeeMakerIcon fontSize="large" />, label: "Coffee Apparat" },
  ];

  if (!room) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "50px" }}>
        <Typography variant="h4">Room not found</Typography>
      </Box>
    );
  }

  const checkUser = () => {
    if (userToken) {
      navigate(`/rooms/booking/${room.id}`);
    } else {
      setOpenDialog(true);
    }
  };
  const handleRegister = () => {
    setOpenDialog(false);
    navigate("/signUp");
  };

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
              Xonalar
            </Typography>
            <Divider sx={{ background: "white" }} />
          </Container>
        </Stack>
      </Box>
      <Box sx={{ padding: "10px", textAlign: "center" }} mt="50px">
        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {[room.img, detailRoom1, detailRoom2].map((imgSrc, index) => (
            <Box
              key={index}
              alignSelf={"center"}
              sx={{
                width: "32%",
                height: "300px",
                overflow: "hidden",
                borderRadius: "8px",
                position: "relative",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                  "& img": {
                    filter: "brightness(70%)",
                  },
                },
                "@media (max-width: 900px)": {
                  width: "60%",
                },
                "@media (max-width: 600px)": {
                  width: "90%",
                },
              }}
            >
              <img
                src={imgSrc}
                alt={`detailRoom${index}`}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "filter 0.3s ease",
                }}
              />
            </Box>
          ))}
        </Stack>

        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mt: "50px",
            "@media (max-width: 600px)": {
              fontSize: "1.5rem",
            },
          }}
        >
          {room.title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            "@media (max-width: 600px)": {
              fontSize: "1rem",
            },
          }}
        >
          {room.infomation}
        </Typography>
      </Box>
      <Container>
        <Box mt="50px" sx={{ padding: "20px" }}>
          <Stack
            direction="column"
            justifyContent="space-between"
            flexWrap="wrap"
            gap="20px"
          >
            <Stack direction="column" gap="15px" sx={{ flex: 1 }}>
              <Typography
                fontWeight="bold"
                variant="h4"
                sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
              >
                Ma'lumot
              </Typography>
              <Typography
                fontSize="21px"
                sx={{
                  fontSize: { xs: "16px", md: "21px" },
                  lineHeight: "1.5",
                }}
              >
                Ushbu {room.size} m2 maydonda o'zingizni oddiy nafislik bilan
                o'rab oling bu sizning mukammal tanlovingiz. Bu xona ham oldida
                to'g'ridan-to'g'ri to'xtash joyi bilan qulaylik yaratadi
                yashashingizni yanada mukammal qiladi Qulay nafis va zamonaviy{" "}
                dizayndagi xona atmosferasi sizni dam olishga undaydi Hammasi{" "}
                toza, yorqin oq soyalar bilan yaratilgan bu qulaylik hissini
                oshiradi.
              </Typography>
            </Stack>

            <Stack sx={{ flex: 1, maxWidth: { xs: "100%", md: "100%" } }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                gap="20px"
              >
                <Typography
                  fontWeight="bold"
                  fontSize="20px"
                  sx={{ fontSize: { xs: "16px", md: "20px" } }}
                >
                  Bron qilish
                </Typography>
                <Typography
                  color="#e8b34a"
                  fontSize="20px"
                  sx={{ fontSize: { xs: "16px", md: "20px" } }}
                >
                  {room.price}$
                </Typography>
              </Stack>
              <Stack mt={2}>
                <Button
                  onClick={checkUser}
                  sx={{
                    background: "#e8b34a",
                    fontSize: { xs: "14px", md: "16px" },
                    padding: { xs: "8px 16px", md: "10px 20px" },
                  }}
                  variant="contained"
                >
                  Bron qilish
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
        <Box>
          <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            <DialogTitle sx={{ fontWeight: "bold" }}>
              Hisob talab qilinadi
            </DialogTitle>
            <DialogContent>
              <Typography>
                Siz bron qilishdan oldin ro'yxatdan o'tishingiz kerak. Hozir
                ro'yxatdan o'tishni xohlaysizmi?
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenDialog(false)} color="secondary">
                Bekor qilish
              </Button>
              <Button
                onClick={handleRegister}
                variant="contained"
                color="primary"
              >
                Roʻyxatdan oʻtish
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
        <Box mt={"100px"}>
          <Box
            sx={{
              backgroundColor: "#121212",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" color="#ffffff" gutterBottom>
              Premium Deluxe Imkoniyatlar
            </Typography>
            <Box
              sx={{
                backgroundColor: "#1f1f1f",
                padding: "20px",
                borderRadius: "8px",
                marginTop: "20px",
              }}
            >
              <Stack
                direction="row"
                spacing={3}
                flexWrap="wrap"
                justifyContent="center"
                sx={{
                  gap: "20px",
                  "@media (max-width: 600px)": {
                    flexDirection: "column",
                    alignItems: "center",
                  },
                }}
              >
                {facilities.map((facility, index) => (
                  <Stack
                    key={index}
                    alignItems="center"
                    sx={{
                      color: "#d4af37",
                      "&:hover": {
                        transform: "scale(1.1)",
                        transition: "0.3s",
                      },
                      cursor: "pointer",
                    }}
                  >
                    {facility.icon}
                    <Typography variant="body1" color="#ffffff" mt={1}>
                      {facility.label}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box mt={"100px"}>
          <Stack>
            <Typography variant="h4">Boshqa Xonalar</Typography>
          </Stack>
          <Stack mt={"30px"} height={"auto"}>
            <DetailRoomCard data={otherRoom} link={`/rooms`} fontSize="15px" />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default DetailRooms;
