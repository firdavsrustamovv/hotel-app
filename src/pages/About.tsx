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

const About = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${aboutUs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: { xs: "300px", md: "450px" },
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
          mt={{ xs: "100px", md: "150px" }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "bold",
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
                mb: 2,
                fontSize: { xs: "40px", md: "50px" },
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
          mt={{ xs: "50px", md: "100px" }}
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent={{ xs: "center", md: "space-between" }}
          gap={3}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            Xalqaro sertifikatlarga ega besh yulduzli mehmonxonalar
          </Typography>
          <Link to={"/rooms"}>
            <Button
              variant="contained"
              sx={{
                background: "Black",
                alignSelf: { xs: "center", md: "unset" },
              }}
            >
              Xona Qidirish
            </Button>
          </Link>
        </Stack>
      </Container>
      <Box>
        <Stack
          justifyContent={"center"}
          mt={{ xs: "50px", md: "100px" }}
          height={"auto"}
          sx={{ backgroundColor: "black" }}
        >
          <Quality />
        </Stack>
        <Container>
          <Box mt={{ xs: "50px", md: "100px" }}>
            <Stack>
              <Typography
                variant="h3"
                textAlign={"center"}
                sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
              >
                Eng qulay joyni topishga yordam beradi
              </Typography>
            </Stack>
          </Box>
          <Box mt={{ xs: "30px", md: "50px" }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              gap={"15px"}
              alignItems="center"
              justifyContent={"center"}
            >
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
                    maxWidth: "300px",
                    borderRadius: "8px",
                  }}
                />
                <Typography
                  textAlign={"center"}
                  fontSize={{ xs: "16px", md: "20px" }}
                >
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
                    maxWidth: "300px",
                    borderRadius: "8px",
                  }}
                />
                <Typography
                  textAlign={"center"}
                  fontSize={{ xs: "16px", md: "20px" }}
                >
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
                    maxWidth: "300px",
                    borderRadius: "8px",
                  }}
                />
                <Typography
                  textAlign={"center"}
                  fontSize={{ xs: "16px", md: "20px" }}
                >
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
