import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"

function App() {
  return (
    <>
    <Header />

    <div className="flex flex-col min-h-[80vh]">
      <Home />
    </div>
    
    <Footer />
    </>
  )
}

export default App
