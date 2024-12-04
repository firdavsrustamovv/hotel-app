import Header from "../components/Header";
import {
  Box,
  Stack,
  Typography,
  Container,
  Divider,
  Button,
} from "@mui/material";
import aboutUs from "../images/aboutUs.png";
import aboutUsImg from "../images/aboutUsImg.png";
import aboutUsImg2 from "../images/aboutUsImg2.png";
import aboutUsImg3 from "../images/aboutUsImg3.png";
import { Link } from "react-router-dom";
import Quality from "../components/Quality";

type Props = {};

const About = (props: Props) => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${aboutUs})`,
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
              Biz haqimizda
            </Typography>
            <Divider sx={{ background: "white" }} />
          </Container>
        </Stack>
      </Box>
      <Container>
        <Stack
          mt={"100px"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5">
            Xalqaro sertifikatlarga ega besh yulduzli mehmonxonalar
          </Typography>
          <Link to={"/rooms"}>
            <Button variant="contained" sx={{ background: "Black" }}>
              Xona Qidirish
            </Button>
          </Link>
        </Stack>
      </Container>
      <Box>
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
            <Stack>
              <Typography variant="h3" textAlign={"center"}>
                Eng qulay joyni topishga yordam beradi
              </Typography>
            </Stack>
          </Box>
          <Box mt={"50px"} height={"650px"}>
            <Stack direction={"row"} gap={"10px"}>
              <Stack
                sx={{
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease",
                  },
                }}
              >
                <img
                  src={aboutUsImg}
                  alt="aboutUsImg"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                  }}
                />
                <Typography textAlign={"center"} fontSize={"20px"}>
                  Toshkent,Chimyon
                </Typography>
              </Stack>
              <Stack
                sx={{
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease",
                  },
                }}
              >
                <img
                  src={aboutUsImg2}
                  alt="aboutUsImg"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                  }}
                />
                <Typography textAlign={"center"} fontSize={"20px"}>
                  Jizzax,Zomin
                </Typography>
              </Stack>
              <Stack
                sx={{
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease",
                  },
                }}
              >
                <img
                  src={aboutUsImg3}
                  alt="aboutUsImg"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                  }}
                />
                <Typography textAlign={"center"} fontSize={"20px"}>
                  Toshkent,Chorvoq
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
