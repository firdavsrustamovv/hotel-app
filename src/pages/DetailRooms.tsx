import { useParams } from "react-router-dom";
import React from "react";

type Props = {};

const DetailRooms = (props: Props) => {
  const id = useParams();
  console.log(id);

  return <div>DetailRooms</div>;
};

export default DetailRooms;
