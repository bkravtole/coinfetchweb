import { BrowserRouter as Router , Route ,Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Coin from "./Components/Coin";
import Exchanges from "./Components/Exchanges";
import CoinDetails from "./Components/CoinDetails";
import Footer from "./Components/Footer";

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/coins" element={<Coin/>} />
      <Route path="/exchanges" element={<Exchanges/>} />
      <Route path="/coin/:id" element={<CoinDetails/>} />
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
