import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import CatalogItem from "./pages/CatalogItem/CatalogItem";
import Features from "./components/Features/Features";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/catalog" element={<Catalog />} />

        <Route path="/catalog/:catalogId" element={<CatalogItem />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
