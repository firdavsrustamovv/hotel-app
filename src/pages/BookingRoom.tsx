import { useParams } from "react-router-dom";
import {
  Stack,
  Typography,
  Container,
  Box,
  Divider,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  Paper,
} from "@mui/material";
import roomBackground from "../images/room.png";
import success from "../images/success-icon-23187.png";
import Header from "../components/Header";
import RoomCard from "../components/RoomCard";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { startLoading, stopLoading } from "../slice/loaderSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import Loader from "../components/Loader";

interface IFormInput {
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  checkIn: string;
  checkOut: string;
  totalRoom: string;
  totalGuest: string;
  codeRefferal: string;
  price: string;
}
interface BookingRoom {
  id: number;
  infomation: string;
  title: string;
  img: string;
}

const steps = ["Shaxsiy ma'lumotlar", "Bron qilish ma'lumotlari", "Xulosa"];
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY as string;
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

const BookingRoom = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [bookingRoom, setBookingRoom] = useState<IFormInput[]>([]);
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [room, setRoom] = useState<any>([]);
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const fetchData = async () => {
    dispatch(startLoading());
    try {
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
  const onSubmit: SubmitHandler<IFormInput> = async (val) => {
    handleNext();
    dispatch(startLoading());
    const { data } = await supabase
      .from("bookingRoom")
      .insert([
        {
          name: val.name,
          lastName: val.lastName,
          email: val.email,
          phoneNumber: val.phoneNumber,
          checkIn: val.checkIn,
          checkOut: val.checkOut,
          totalRoom: val.totalRoom,
          totalGuest: val.totalGuest,
          codeRefferal: val.codeRefferal,
          room_name: room.title,
          img: room.img,
          price: room.price,
        },
      ])
      .select("*");
    dispatch(stopLoading());
    setBookingRoom(data || []);
  };
  useEffect(() => {
    fetchData();
  }, [id]);

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
              {room?.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                fontWeight: "bold",
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
                mb: 2,
              }}
            >
              {room?.infomation}
            </Typography>
            <Divider sx={{ background: "white" }} />
          </Container>
        </Stack>
      </Box>
      <Container sx={{ height: "100%" }}>
        <Box mt={"100px"}>
          <Stack
            direction={"row"}
            justifyContent={"space-around"}
            flexWrap={"wrap"}
            gap={"30px"}
          >
            <Typography variant="h4">Bron qilinadigan xona</Typography>
            <Stack>
              <Box
                sx={{ maxWidth: "550px", width: { xs: "100%", md: "550px" } }}
              >
                <Stepper activeStep={step} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Box mt={"50px"} height={"auto"}>
          <Stack
            direction={"row"}
            justifyContent={"space-around"}
            gap={"50px"}
            flexWrap={"wrap"}
            alignItems={"center"}
          >
            <Stack>
              <RoomCard
                imageUrl={room?.img || "default img"}
                title={room?.title || "default title"}
                price={room?.price || 500}
                size={room?.size || 60}
                beds={room?.beds || 1}
              />
            </Stack>
            <Stack>
              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                sx={{
                  mt: 4,
                  "& .MuiTextField-root": { mb: 2 },
                }}
              >
                {step === 0 && (
                  <Card
                    elevation={3}
                    sx={{ p: 4, mb: 4, borderRadius: 2, marginTop: "-40px" }}
                  >
                    <Typography variant="h5" mb={3}>
                      Shaxsiy ma'lumot
                    </Typography>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                      sx={{ mb: 2 }}
                    >
                      <TextField
                        fullWidth
                        label="Ism"
                        {...register("name", { required: true })}
                        placeholder="Ismingiz"
                        variant="outlined"
                        InputProps={{
                          sx: {
                            bgcolor: "#f9f9f9",
                          },
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Familya"
                        {...register("lastName", { required: true })}
                        placeholder="Familyangiz"
                        variant="outlined"
                        InputProps={{
                          sx: {
                            bgcolor: "#f9f9f9",
                          },
                        }}
                      />
                    </Stack>

                    <TextField
                      fullWidth
                      label="Email"
                      {...register("email", { required: true })}
                      placeholder="Email"
                      type="email"
                      variant="outlined"
                      sx={{ mb: 2 }}
                      InputProps={{
                        sx: {
                          bgcolor: "#f9f9f9",
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Telefon Raqam"
                      {...register("phoneNumber", { required: true })}
                      placeholder="Telefon Raqamingiz"
                      type="tel"
                      variant="outlined"
                      InputProps={{
                        sx: {
                          bgcolor: "#f9f9f9",
                        },
                      }}
                    />

                    <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      size="large"
                      sx={{
                        mt: 3,
                        bgcolor: "#e8b34a",
                        "&:hover": {
                          bgcolor: "#b39861",
                        },
                        textTransform: "none",
                        py: 1.5,
                      }}
                    >
                      Keyingisi
                    </Button>
                  </Card>
                )}
                {step === 1 && (
                  <Card
                    elevation={3}
                    sx={{
                      p: 2,
                      mb: 4,
                      borderRadius: 2,
                      marginTop: "-40px",
                      width: {
                        sm: "100%",
                        md: "550px",
                        maxWidth: "550px",
                      },
                    }}
                  >
                    <Typography variant="h5" mb={3} textAlign="center">
                      Bron qilish ma'lumotlari
                    </Typography>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                      sx={{ mb: 2 }}
                    >
                      <TextField
                        {...register("checkIn", { required: true })}
                        variant="outlined"
                        type="date"
                        fullWidth
                        InputProps={{
                          sx: {
                            bgcolor: "#f9f9f9",
                          },
                        }}
                      />
                      <TextField
                        {...register("checkOut", { required: true })}
                        variant="outlined"
                        type="date"
                        fullWidth
                        InputProps={{
                          sx: {
                            bgcolor: "#f9f9f9",
                          },
                        }}
                      />
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                      sx={{ mb: 2 }}
                    >
                      <FormControl fullWidth>
                        <InputLabel>Umumiy xona</InputLabel>
                        <Select
                          label="Umumiy xona"
                          {...register("totalRoom", { required: true })}
                          sx={{ bgcolor: "#f9f9f9" }}
                        >
                          <MenuItem value={1}>01</MenuItem>
                          <MenuItem value={2}>02</MenuItem>
                          <MenuItem value={3}>03</MenuItem>
                          <MenuItem value={4}>04</MenuItem>
                        </Select>
                      </FormControl>

                      <FormControl fullWidth>
                        <InputLabel>Tashrif buyuruvchilar</InputLabel>
                        <Select
                          label="Tashrif buyuruvchilar"
                          {...register("totalGuest", { required: true })}
                          sx={{ bgcolor: "#f9f9f9" }}
                        >
                          <MenuItem value={1}>01</MenuItem>
                          <MenuItem value={2}>02</MenuItem>
                          <MenuItem value={3}>03</MenuItem>
                          <MenuItem value={4}>04</MenuItem>
                        </Select>
                      </FormControl>
                    </Stack>

                    <TextField
                      fullWidth
                      label="Referral Kod"
                      {...register("codeRefferal")}
                      placeholder="Agar bo'lsa"
                      variant="outlined"
                      sx={{ mt: 2 }}
                      InputProps={{
                        sx: {
                          bgcolor: "#f9f9f9",
                        },
                      }}
                    />

                    <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      size="large"
                      sx={{
                        mt: 3,
                        bgcolor: "#e8b34a",
                        "&:hover": {
                          bgcolor: "#b39861",
                        },
                        textTransform: "none",
                        py: 1.5,
                      }}
                    >
                      Keyingisi
                    </Button>
                  </Card>
                )}

                {step === 2 && (
                  <Card
                    elevation={3}
                    sx={{
                      p: 2,
                      mb: 4,
                      borderRadius: 2,
                      marginTop: { xs: "-40px", md: "-20px" },
                      width: {
                        xs: "100%",
                        md: "550px",
                        maxWidth: "550px",
                      },
                    }}
                  >
                    <Stack direction={"column"} gap={"8px"}>
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography>To'liq Ism</Typography>
                        <Stack direction={"row"} gap={"5px"}>
                          <Typography>
                            {bookingRoom.map((data) => data.lastName)}
                          </Typography>
                          <Typography>
                            {bookingRoom.map((data) => data.name)}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography>Xonalar soni</Typography>
                        <Typography>
                          {bookingRoom.map((data) => data.totalRoom)}
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography>Mexmonlar soni</Typography>
                        <Typography>
                          {bookingRoom.map((data) => data.totalGuest)}
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography>Kirish</Typography>
                        <Typography>
                          {bookingRoom.map((data) => data.checkIn)}
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography>Chiqish</Typography>
                        <Typography>
                          {bookingRoom.map((data) => data.checkOut)}
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography>Narx</Typography>
                        <Typography>
                          {bookingRoom.map((data) => data.price)}$
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography>Chegirma</Typography>
                        <Typography>-</Typography>
                      </Stack>
                      <Divider />
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography>Jami narx</Typography>
                        <Typography>
                          {bookingRoom.map((data) => data.price)}$
                        </Typography>
                      </Stack>
                    </Stack>
                    <Button
                      fullWidth
                      variant="contained"
                      type="button"
                      onClick={handleNext}
                      size="large"
                      sx={{
                        mt: 3,
                        bgcolor: "#e8b34a",
                        "&:hover": {
                          bgcolor: "#b39861",
                        },
                        textTransform: "none",
                        py: 1.5,
                      }}
                    >
                      Keyingisi
                    </Button>
                  </Card>
                )}
                {step === 3 && (
                  <Box>
                    <Stack
                      textAlign={"center"}
                      justifyContent={"center"}
                      width={{ xs: "100%", md: "550px" }}
                      maxWidth={"550px"}
                    >
                      <Stack
                        direction={"column"}
                        gap={"20px"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        // marginRight={"130px"}
                        marginTop={"-50px"}
                      >
                        <Typography fontSize={"20px"}>
                          Xaridingiz uchun rahmat
                        </Typography>
                        <img src={success} width={230} alt="succes" />
                        <Button
                          fullWidth
                          variant="contained"
                          type="button"
                          onClick={() => navigate("/")}
                          size="large"
                          sx={{
                            mt: 3,
                            bgcolor: "#e8b34a",
                            "&:hover": {
                              bgcolor: "#b39861",
                            },
                            textTransform: "none",
                            py: 1.5,
                          }}
                        >
                          Asosiy
                        </Button>
                      </Stack>
                    </Stack>
                  </Box>
                )}
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default BookingRoom;
