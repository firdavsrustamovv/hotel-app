import FacilitiesCard from "../components/FacilitiesCard";
import Header from "../components/Header";
import facilities from "../images/facilities.png";
import { Box, Stack, Container, Typography, Divider } from "@mui/material";
import swimingPool from "../images/swimingPool.png";
import gym from "../images/gym.png";
import cafe from "../images/cafe.png";

type Props = {};
const facilitiesData = [
  {
    img: swimingPool,
    title: "Yopiq suzish havzasi",
    infomation:
      "Bizda yopiq suzish havzasi mavjud bo'lib  yilning 4 faslida ham ishlaydi",
  },
  {
    img: gym,
    title: "Sport zali mashg'ulot maydoni",
    infomation:
      "Bizda Sport zali mashg'ulot maydoni mavjud va u zamonaviy sport anjomlari bilan ta'minlangan",
  },
  {
    img: cafe,
    title: "Kafe va restoran",
    infomation:
      "Kafe va restoranlarimiz 24 soat ishlaydi va siz xohlagan ta'omingizni tanovul qilishingiz mumkin",
  },
  {
    img: gym,
    title: "Sport zali mashg'ulot maydoni",
    infomation:
      "Bizda Sport zali mashg'ulot maydoni mavjud va u zamonaviy sport anjomlari bilan ta'minlangan",
  },
  {
    img: cafe,
    title: "Kafe va restoran",
    infomation:
      "Kafe va restoranlarimiz 24 soat ishlaydi va siz xohlagan ta'omingizni tanovul qilishingiz mumkin",
  },
  {
    img: swimingPool,
    title: "Yopiq suzish havzasi",
    infomation:
      "Bizda yopiq suzish havzasi mavjud bo'lib  yilning 4 faslida ham ishlaydi",
  },
];

const Facilities = (props: Props) => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${facilities})`,
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
            <FacilitiesCard data={facilitiesData} links="" />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Facilities;
