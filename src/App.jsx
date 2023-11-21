import Layout from "./components/Layout";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contatti from "./pages/Contatti";
import Error from "./pages/Error";
import Drink from "./pages/Drink";
import { useEffect } from "react";
import { fetchData } from "./redux/drinkSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/cocktail/:id" element={<Drink />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
