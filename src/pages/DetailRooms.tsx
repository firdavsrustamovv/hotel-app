import { useParams } from "react-router-dom";
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

type Props = {};

const DetailRooms = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  const numericId = parseInt(id || "0");
  const allRooms = [...blogData, ...blogDataNewRooms];
  const room = allRooms.find((room) => room.id === numericId);

  if (!room) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "50px" }}>
        <Typography variant="h4">Room not found</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${roomBackground})`,
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
                height: "300px", // Set uniform height
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
                  objectFit: "cover", // Ensures consistent image size
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
                Description
              </Typography>
              <Typography fontSize={"20px"}>
                Surround yourself with simple elegance in this 50,5 m2 <br />
                beautifully appointed Deluxe Premium Room with some traditional{" "}
                <br />
                touch, our 50,5 m2 is simply your perfect choice. This room also{" "}
                <br />
                provides convenience with direct parking access in front of the{" "}
                <br />
                room and terrace that make your stay more perfect. A comfortable{" "}
                <br />
                room atmosphere with an elegant and modern design makes you rest{" "}
                <br />
                more soundly. All are designed with clean, bright white shades{" "}
                <br />
                that add to the sensation of comfort.
              </Typography>
            </Stack>
            <Stack>
              <Stack
                direction={"row"}
                gap={"100px"}
                justifyContent={"space-between"}
              >
                <Typography fontWeight={"bold"} fontSize={"20px"}>
                  Booking
                </Typography>
                <Typography color="#C9A96A" fontSize={"20px"}>
                  $500/Night
                </Typography>
              </Stack>
              <Stack mt={"200px"}>
                <Button sx={{ background: "#C9A96A" }} variant="contained">
                  Booking
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default DetailRooms;
