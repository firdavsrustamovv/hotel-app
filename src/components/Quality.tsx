import { Stack, Typography, Divider, Rating, Container } from "@mui/material";

const Quality = () => {
  return (
    <Container>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        padding={5}
        gap={2}
      >
        <Stack direction={{ xs: "row", md: "column" }} gap={{ xs: 5, md: 1 }}>
          <Stack direction={{ xs: "row", md: "column" }}>
            <Stack>
              <Typography
                variant="h6"
                color="white"
                sx={{ fontSize: { xs: "25px", md: "30px" } }}
              >
                Har doim eng yaxshi xizmat va sifatga ega mehmonxona
              </Typography>
              <Divider color="white" sx={{ marginTop: "20px" }} />
              <Stack mt={"20px"}>
                <Rating
                  sx={{ fontSize: { xs: "30px", md: "40px" } }}
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={5}
                  readOnly
                />
                <Typography color="white" fontSize={"13px"}>
                  Besh yulduzli mehmonxona
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction={"row"} gap={2}>
          <Stack
            direction={"column"}
            justifyContent={"center"}
            sx={{
              border: "1px solid white",
              borderRadius: "50%",
              width: { xs: "100px", md: "200px" },
              height: { xs: "100px", md: "200px" },
            }}
          >
            <Stack
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                variant="h3"
                color="white"
                sx={{ fontSize: { xs: "20px", md: "50px" } }}
              >
                100+
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "10px", md: "20px" } }}
                color="white"
              >
                Qulay xonalar
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"column"}
            justifyContent={"center"}
            sx={{
              border: "1px solid white",
              borderRadius: "50%",
              width: { xs: "100px", md: "200px" },
              height: { xs: "100px", md: "200px" },
            }}
          >
            <Stack
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                variant="h3"
                color="white"
                sx={{ fontSize: { xs: "20px", md: "50px" } }}
              >
                5M+
              </Typography>
              <Typography
                color="white"
                sx={{ fontSize: { xs: "10px", md: "20px" } }}
              >
                Baxtli mijozlar
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"column"}
            justifyContent={"center"}
            sx={{
              border: "1px solid white",
              borderRadius: "50%",
              width: { xs: "100px", md: "200px" },
              height: { xs: "100px", md: "200px" },
            }}
          >
            <Stack
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                variant="h3"
                color="white"
                sx={{ fontSize: { xs: "20px", md: "50px" } }}
              >
                23+
              </Typography>
              <Typography
                color="white"
                sx={{ fontSize: { xs: "10px", md: "20px" } }}
              >
                Sertifikatlar
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Quality;
