import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import CardCategoria from "./components/categoria/cardcategoria/CardCategoria"
import ListarCategoria from "./components/categoria/listarcategoria/ListarCategoria"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="flex flex-col min-h-[80vh] bg-gradient-to-br from-yellow-50 from-0% via-teal-50 via-25% to-yellow-50 to-100%">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListarCategoria />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  )
}

export default App
