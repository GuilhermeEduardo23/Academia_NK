import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Location from "./components/Location"
import Photos from "./components/Photos"

function App() {
  return (
    <div className="font-poppins bg-[#242424] min-h-screen text-white pr-2 pl-2 flex flex-col gap-44">
      <Header />
      <Home />
      <Photos />
      <Location />
      <Footer />
    </div>
  )
}

export default App