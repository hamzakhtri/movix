import { useEffect } from "react"
import { fetchDataFromApi } from "./utils/api"
import { useDispatch, useSelector } from "react-redux";
import { setApiConfiguration } from "./store/features/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/404/PageNotFound";
import SearchResult from "./pages/searchResult/SearchResult";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";

function App() {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.home.url);

  const fetchApiConfig = () => {

    fetchDataFromApi('/configuration')
      .then((resp) => {

        const url = {
          backdrop: resp.images.secure_base_url + "original",
          poster: resp.images.secure_base_url + "original",
          profile: resp.images.secure_base_url + "original",
        }
        dispatch(setApiConfiguration(url));
      })
  };

  useEffect(() => {
    fetchApiConfig();
  }, [])

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
