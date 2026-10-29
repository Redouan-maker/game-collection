import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";
import { useState } from "react";
import games from "./data/games.json";

function App() {
    
    const [search, setSearch] = useState("");
    
;

    return (

        <div className="game-list">

            <Header title="🎮 Game Collection" />

            <input

    className="search-input"

    type="text"

    placeholder="Zoek een game..."

    value={search}

    onChange={(e) => setSearch(e.target.value)}

/>

            <div className="games">

                <h2>Welkom bij mijn eerste React-applicatie!</h2>

                {games

.filter((game) =>

    game.title.toLowerCase().includes(search.toLowerCase())

)

.map((game) => (

    <GameCard

    key={game.id}

    title={game.title}

    platform={game.platform}

    genre={game.genre}

    rating={game.rating}

    year={game.year}

    image={game.image}

/>

))}

                <p>Naam: Redouan Abouhcen</p>

                <p>Studentnummer: 2229629</p>

                <p>Klas: 5B</p>

                <Footer />

            </div>

        </div>

    );

}

export default App;
