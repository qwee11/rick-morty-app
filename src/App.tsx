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
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  document.querySelector('body')!.setAttribute('data-theme', theme)

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <main className="container">
        <Routes>
          <Route path='/rick-morty-app/' element={<Navigate to={'/rick-morty-app/characters'} />} />
          <Route path='/rick-morty-app/characters' element={<CharactersPage />} />
          <Route path='/rick-morty-app/characters/:id' element={<CharacterPage />} />
          <Route path='/rick-morty-app/locations' element={<LocationsPage />} />
          <Route path='/rick-morty-app/locations/:id' element={<LocationPage />} />
          <Route path='/rick-morty-app/episodes' element={<EpisodesPage />} />
          <Route path='/rick-morty-app/episodes/:id' element={<EpisodePage />} />
          <Route path='/rick-morty-app/error' element={<h1>Error! Try again!</h1>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
