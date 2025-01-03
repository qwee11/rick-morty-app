import { useState } from "react"
import Header from "./components/Header/Header"
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import LocationsPage from "./pages/LocationsPage/LocationsPage";
import EpisodesPage from "./pages/EpisodesPage/EpisodesPage";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import LocationPage from "./pages/LocationPage/LocationPage";
import EpisodePage from "./pages/EpisodePage/EpisodePage";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  document.querySelector('body')!.setAttribute('data-theme', theme)

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <main className="container">
        <Routes>
          <Route path='/' element={<Navigate to={'/characters'} />} />
          <Route path='/characters' element={<CharactersPage />} />
          <Route path='/characters/:id' element={<CharacterPage />} />
          <Route path='/locations' element={<LocationsPage />} />
          <Route path='/locations/:id' element={<LocationPage />} />
          <Route path='/episodes' element={<EpisodesPage />} />
          <Route path='/episodes/:id' element={<EpisodePage />} />
          <Route path='/error' element={<div>Error!</div>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
