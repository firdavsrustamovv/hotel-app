import Header from "../components/Header";
import { Stack, Container, Box, Typography, Divider } from "@mui/material";
import FacilitiesCard from "../components/FacilitiesCard";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import offersImg from "../images/offers.png";

type Props = {};
// const offersData = [
//   {
//     img: tea,
//     name: "Kunduzgi Choy",
//     title:
//       "Peshindan keyin dam olish  turli xil pishiriqlarimiz va maxsus choylarimizdan zavqlaning",
//   },
//   {
//     img: birthday,
//     title: "Tug'ilgan kun",
//     infomation:
//       "Tug'ilgan kuningiz haqidagi orzuingiz haqida bizga xabar bering va biz uni amalga oshirishga yordam beraylik",
//   },
//   {
//     img: breakfast,
//     title: "Suzuvchi nonushta",
//     infomation:
//       "O'zingizni chet eldagidek his qiling, suzuvchi nonushtamiz sizni kutmoqda",
//   },
// ];
interface OffersData {
  id: number;
  name: string;
  title: string;
  img: string;
}
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY as string;
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

const Offers = (props: Props) => {
  const [offers, setOffers] = useState<OffersData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("offersForHotel").select("*");
      console.log(data);

      if (error) {
        throw error;
      }

      setOffers(data || []);
    } catch (err: any) {
      console.error("Fetch error: ", err.message);
      setError("Failed to fetch data");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${offersImg})`,
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
          <Stack height={"auto"}>
            <FacilitiesCard data={offers} links="" />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Offers;
