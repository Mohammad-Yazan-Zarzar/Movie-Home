import Home from "./Pages/Home";
import Trending from "./Pages/Trending";
import { useState, createContext, useContext } from "react";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import Movies from "./Pages/Movies";
import MovieDetailes from "./Pages/MovieDetailes";
import WatchList from "./Pages/WatchList";
import NoPage from "./Pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const UserContext = createContext();


function App() {
  const [load, setLoad] = useState('No');
  const[detailes,setDetailes]=useState(550);
  const[ground,setGround]=useState('zar')
  return (
    <>
      <UserContext.Provider value={{load,setLoad,detailes,setDetailes}}>
        {/* ----------- */}
        {/* <Layout></Layout> */}
        {/* <Home></Home> */}
        {/* ----------- */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* <Route index element={<Home />} /> */}
                <Route path="Movie-Home" element={<Home />} />

                <Route path="Login" element={<Login />} />
                <Route path="Movies" element={<Movies />} />
                <Route path="Movie-Detailes" element={<MovieDetailes />} />
                <Route path="WatchList" element={<WatchList />} />

                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
        </BrowserRouter>
      </UserContext.Provider>

    </>
      
  );
}

export default App;
