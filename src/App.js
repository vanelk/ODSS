import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import ScanPage from './pages/scanPage';
import HomeB from './pages/homeb';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="scan" element={<ScanPage />} />
        <Route path="home" element={<HomeB />}/>
        {/*  <Route path=":teamId" element={<Team />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
