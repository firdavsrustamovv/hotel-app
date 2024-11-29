import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const BookingRoom = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  console.log(id);

  return <div>Booking Room {id}</div>;
};

export default BookingRoom;
