import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Location from "./components/Location"
import Photos from "./components/Photos"

import { register } from "swiper/element-bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  return (
    <div className="font-poppins bg-[#051119] text-white">
      <Header />
      <Home />
      <Photos />
      <Location />
      <Footer />
    </div>
  )
}

export default App