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
import CAlert from "./Components/Alert";

export const UserContext = createContext();


function App() {
  const [load, setLoad] = useState('No');
  const[detailes,setDetailes]=useState(550);
  const[type,setType]=useState('movie')
  const[ground,setGround]=useState('zar')
  const[AlertOpacity,setAlertOpacity]=useState(0);
  return (
    <>
      <UserContext.Provider value={{load,setLoad,detailes,setDetailes,type,setType,AlertOpacity,setAlertOpacity}}>
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
                <Route path="Movie-Home/trend" element={<Home><Trending></Trending></Home>} ></Route>
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
        </BrowserRouter>
        <CAlert></CAlert>
      </UserContext.Provider>

    </>
      
  );
}

export default App;
