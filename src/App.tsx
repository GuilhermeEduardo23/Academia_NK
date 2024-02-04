import Header from "./components/Header"
import Home from "./components/Home"
import Location from "./components/Location"
import Photos from "./components/Photos"

function App() {
  return (
    <div className="font-poppins bg-[#242424] min-h-screen text-white pr-4 pl-4">
      <Header />
      <Home />
      <Photos />
      <Location />
    </div>
  )
}

export default App