import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Facilities from "./pages/Facilities";
import Wedding from "./pages/Wedding";
import Offers from "./pages/Offers";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Header from "./components/Header";
import "./App.css";

type Props = {};

const App = (props: Props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
