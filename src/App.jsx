import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

function App() {

    const games = [

    {
        id: 1,
        title: "Minecraft",
        platform: "PC"
    },

    {
        id: 2,
        title: "Mario Kart",
        platform: "Nintendo Switch"
    },

    {
        id: 3,
        title: "Rocket League",
        platform: "PlayStation 5"
    },

{
    id: 4,
    title: "Fc 27",
    platform: " PlayStation 5, Xbox Series X, PC"
}

];

    return (

        <div className="game-list">

            <Header title="🎮 Game Collection" />

            <div className="games">

                <h2>Welkom bij mijn eerste React-applicatie!</h2>

                {games.map((game) => (

    <GameCard

        key={game.id}

        title={game.title}

        platform={game.platform}

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
