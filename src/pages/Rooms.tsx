import { Stack, Typography, Box, Container, Divider } from "@mui/material";
import Header from "../components/Header";
import roomBackground from "../images/room.png";
import BlogCard, { Data } from "../components/BlogCard";
import executiveRoom from "../images/executiveRoom.png";
import juniorRoom from "../images/juniorRoom.png";
import grandRoom from "../images/grandRoom.png";
import premiumGrandDeluxeRoom from "../images/premiumGrandDeluxeRoom.png";
import executiveRoom2 from "../images/executiveRoom2.png";
import premiumRoom from "../images/premiumRoom.png";
import premiumDeluxeRoom from "../images/premiumDeluxeRoom.png";

type Props = {};

export const blogData = [
  {
    id: 1,
    img: executiveRoom,
    title: "Ota-onalar uchun",
    infomation: "50 m² 2 yotoqxona 1 hammom va balkon",
  },
  {
    id: 2,
    img: juniorRoom,
    title: "Bollalar uchun",
    infomation: "50 m² 1 yotoqxona 1 hammom balkon",
  },
  {
    id: 3,
    img: grandRoom,
    title: "Katta oila uchun",
    infomation: "80 m² 2 yotoqxona 1 hammom balkon",
  },
];
export const blogDataNewRooms = [
  {
    id: 4,
    img: executiveRoom2,
    title: "Lyuks xona",
    infomation: "50 m² 2 yotoqxona 1 hammom va balkon",
  },
  {
    id: 5,
    img: premiumRoom,
    title: "Premium xona",
    infomation: "50 m² 1 yotoqxona 1 hammom balkon",
  },
  {
    id: 6,
    img: premiumDeluxeRoom,
    title: "Premium Deluxe xona",
    infomation: "60 m² 1 yotoqxona 1 hammom balkon",
  },
];

const Rooms = (props: Props) => {
  return (
    <Box>
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

      <Container>
        <Box>
          <Stack mt="100px">
            <Typography sx={{ fontSize: "36px", textAlign: "center" }}>
              Bizning qulay va hamma sharoitlarga <br /> ega xonalarimizda dam
              oling
            </Typography>
          </Stack>
          <Box mt="50px">
            <BlogCard data={blogData} link={`/rooms`} fontSize="25px" />
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
          <Box sx={{ position: "absolute", top: 350 }}>
            <Stack
              sx={{
                textAlign: "left",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
                  mb: 2,
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
          <BlogCard data={blogDataNewRooms} link={`/rooms`} fontSize="20px" />
        </Container>
      </Box>
    </Box>
  );
};

export default Rooms;
