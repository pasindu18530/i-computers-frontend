import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./pages/adminPage";
import HomePage from "./pages/homePage";
// import TrendingProduct from './components/trendingProducts'
// import ProductCard from './components/productCard'

function App() {
  return (
    <>
      <div className="w-full h-screen border-[6px] flex justify-center items-center">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
