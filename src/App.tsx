import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Facilities from "./pages/Facilities";
import Offers from "./pages/Offers";
import About from "./pages/About";
import "./App.css";
import DetailRooms from "./pages/DetailRooms";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import BookingRoom from "./pages/BookingRoom";

type Props = {};

const App = (props: Props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/*">
          <Route index element={<Rooms />} />
          <Route path=":id" element={<DetailRooms />} />
          <Route path="booking/:id" element={<BookingRoom />} />
        </Route>
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/*">
          <Route index element={<Blog />} />
          <Route path=":id" element={<Blog />} />
        </Route>
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <div style={{ height: "100px" }}></div>
      <Footer />
    </div>
  );
};

export default App;
