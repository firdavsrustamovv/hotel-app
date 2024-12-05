import Header from "../components/Header";
import { Stack, Container, Box, Typography, Divider } from "@mui/material";
import offers from "../images/offers.png";
import tea from "../images/tea.png";
import birthday from "../images/Screenshot 2024-11-26 223500.png";
import breakfast from "../images/breakfast.png";
import honeymon from "../images/honeymon.png";
import FacilitiesCard from "../components/FacilitiesCard";

type Props = {};
const offersData = [
  {
    img: tea,
    title: "Kunduzgi Choy",
    infomation:
      "Peshindan keyin dam olish  turli xil pishiriqlarimiz va maxsus choylarimizdan zavqlaning",
  },
  {
    img: birthday,
    title: "Tug'ilgan kun",
    infomation:
      "Tug'ilgan kuningiz haqidagi orzuingiz haqida bizga xabar bering va biz uni amalga oshirishga yordam beraylik",
  },
  {
    img: breakfast,
    title: "Suzuvchi nonushta",
    infomation:
      "O'zingizni chet eldagidek his qiling, suzuvchi nonushtamiz sizni kutmoqda",
  },
  {
    img: honeymon,
    title: "Asaloyi",
    infomation: "Asaloyingizni o'zgacha o'tqazishga biz yordam beramz",
  },
];

const Offers = (props: Props) => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${offers})`,
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
              Takliflarimiz
            </Typography>
            <Divider sx={{ background: "white" }} />
          </Container>
        </Stack>
      </Box>
      <Container>
        <Box mt={"100px"}>
          <Stack height={"1400px"}>
            <FacilitiesCard data={offersData} links="" />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Offers;
