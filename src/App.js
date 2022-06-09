import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import HomeB from './pages/homeb';
import ScanPage from './pages/scanPage';
import HomeWelcome from './pages/homeWelcome';
import ItemDetails from './pages/itemDetails';
import ItemList from './pages/itemList';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="start_home" element={<HomeB />} />
        <Route path="scan" element={<ScanPage />} />
        <Route path="home" element={<HomeWelcome />}/>
        <Route path="item" element={<ItemDetails />} />
        <Route path="list" element={<ItemList />} />
        {/*  <Route path=":teamId" element={<Team />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
