
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../Layout.jsx';
import IndexPage from './Pages/IndexPage.jsx';
import "/home/rohit/Documents/code/OTAKU WARS/OTAKU SHOWDOWN/src/index.css"
import Leaderboard from "./Pages/Leaderboard.jsx";
import { Fights } from "./Pages/Fights.jsx";
import AnimeForm from "./Pages/AnimeForm.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/leaderboard/" element={<Leaderboard/>}/>
          <Route path="/fights" element={<Fights/>}/>
          <Route path="/add" element={<AnimeForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;