import React from "react";
import { Stack, Box, Typography } from "@mui/material";

interface Data {
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  checkIn: string;
  checkOut: string;
  totalRoom: string;
  totalGuest: string;
  codeRefferal: string;
  room_name: string;
  img: string;
}

interface CardForBookedRoomProps {
  data: Data[];
}

const CardForBookedRoom: React.FC<CardForBookedRoomProps> = ({ data }) => {
  return (
    <Box>
      <Stack direction={"column"} flexWrap={"wrap"}>
        <Stack gap={5}>
          {data.map((item, index) => (
            <Stack
              key={index}
              direction={"row"}
              gap={"70px"}
              sx={{
                transition: "transform 0.3s, box-shadow 0.3s",
                borderRadius: "8px",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <img
                src={item.img}
                alt={item.room_name}
                loading="lazy"
                style={{
                  width: "250px",
                  height: "100%",
                  borderRadius: "8px",
                }}
              />
              <Stack alignSelf={"center"}>
                <Typography variant="h5" fontWeight={600}>
                  Xona Turi: {item.room_name}
                </Typography>
                <Typography variant="h6">Kirish: {item.checkIn}</Typography>
                <Typography variant="h6">Chiqish: {item.checkOut}</Typography>
                <Typography variant="h6">
                  Xonalar soni: {item.totalRoom}
                </Typography>
                <Typography variant="h6">
                  Mexmonlar soni: {item.totalGuest}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default CardForBookedRoom;
