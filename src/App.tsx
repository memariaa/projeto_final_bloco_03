import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="flex flex-col min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      
      <Footer />
    </BrowserRouter>
  )
}

export default App
