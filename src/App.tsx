import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Location from "./components/Location";
import Photos from "./components/Photos";

import { register } from "swiper/element-bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Services from "./components/Services";


function App() {
  return (
    <div className="font-poppins text-white bg-[#121813]">
      <Header />
      <Home />
      <Photos />
      <Services />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
