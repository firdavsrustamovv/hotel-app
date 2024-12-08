import { useParams, useNavigate } from "react-router-dom";
import { blogDataNewRooms, blogData } from "./Rooms";
import {
  Typography,
  Box,
  Stack,
  Container,
  Divider,
  Button,
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
import BlogCard from "../components/BlogCard";
import executiveRoom from "../images/executiveRoom.png";
import juniorRoom from "../images/juniorRoom.png";
import grandRoom from "../images/grandRoom.png";
type Props = {};
const blogDatas = [
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

const DetailRooms = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  const numericId = parseInt(id || "0");
  const allRooms = [...blogData, ...blogDataNewRooms];
  const room = allRooms.find((room) => room.id === numericId);
  const navigate = useNavigate();

  if (!room) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "50px" }}>
        <Typography variant="h4">Room not found</Typography>
      </Box>
    );
  }

  const facilities = [
    { icon: <PhoneIcon fontSize="large" />, label: "Telefon" },
    { icon: <BathtubIcon fontSize="large" />, label: "Hammom" },
    { icon: <ShowerIcon fontSize="large" />, label: "Do'sh" },
    { icon: <WifiIcon fontSize="large" />, label: "Tezkor Wifi" },
    { icon: <TvIcon fontSize="large" />, label: "LCD Televizor" },
    { icon: <CoffeeMakerIcon fontSize="large" />, label: "Coffee Apparat" },
  ];

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
      <Box sx={{ padding: "20px", textAlign: "center" }} mt={"50px"}>
        <Stack direction={"row"} justifyContent={"space-between"} spacing={2}>
          {[room.img, detailRoom1, detailRoom2].map((imgSrc, index) => (
            <Box
              key={index}
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
                  "&::after": {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
                  },
                },
              }}
            >
              <img
                src={imgSrc}
                alt={`detailRoom${index}`}
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

        <Typography variant="h3" sx={{ fontWeight: "bold", mt: "50px" }}>
          {room.title}
        </Typography>
        <Typography variant="h6">{room.infomation}</Typography>
      </Box>
      <Container>
        <Box mt={"100px"}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"column"} gap={"15px"}>
              <Typography fontWeight={"bold"} variant="h4">
                Ma'lumot
              </Typography>
              <Typography fontSize={"21px"}>
                Ushbu 50,5 m2 maydonda o'zingizni oddiy nafislik bilan o'rab{" "}
                <br />
                oling bu sizning mukammal tanlovingiz. Bu xona ham oldida <br />
                to'g'ridan-to'g'ri to'xtash joyi bilan qulaylik yaratadi <br />
                yashashingizni yanada mukammal qiladi Qulay nafis va zamonaviy{" "}
                <br />
                dizayndagi xona atmosferasi sizni dam olishga undaydi Hammasi{" "}
                <br />
                toza, yorqin oq soyalar bilan yaratilgan bu qulaylik hissini
                oshiradi.
              </Typography>
            </Stack>
            <Stack>
              <Stack
                direction={"row"}
                gap={"100px"}
                justifyContent={"space-between"}
              >
                <Typography fontWeight={"bold"} fontSize={"20px"}>
                  Bron qilish
                </Typography>
                <Typography color="#e8b34a" fontSize={"20px"}>
                  $500/Kun
                </Typography>
              </Stack>
              <Stack mt={"170px"}>
                <Button
                  onClick={() => navigate(`/rooms/booking/${room.id}`)}
                  sx={{ background: "#e8b34a" }}
                  variant="contained"
                >
                  Bron qilish
                </Button>
              </Stack>
            </Stack>
          </Stack>
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
            <BlogCard data={blogDatas} link={`/rooms`} fontSize="15px" />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default DetailRooms;
