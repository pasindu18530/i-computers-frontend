import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./pages/adminPage";
import HomePage from "./pages/homePage";
import TestPage from "./pages/test";
import LoginPage from "./pages/login page";
import ForgotPassword from "./pages/forgot-Password";
// import TrendingProduct from './components/trendingProducts'
// import ProductCard from './components/productCard'

function App() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-primary text-secondary">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/admin/*" element={<AdminPage/>}/>
          <Route path="/test" element={<TestPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/forgot-Password" element={<ForgotPassword/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
