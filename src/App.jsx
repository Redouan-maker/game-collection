import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

function App() {

    return (

        <div className="game-list">

            <Header title="🎮 Game Collection" />

            <div className="games">

                <h2>Welkom bij mijn eerste React-applicatie!</h2>

                <GameCard
    title="Minecraft"
    platform="PC"
/>

<GameCard
    title="Mario Kart"
    platform="Nintendo Switch"
/>

<GameCard
    title="Rocket League"
    platform="PlayStation 5"
/>

                <p>Naam: Redouan Abouhcen</p>

                <p>Studentnummer: 2229629</p>

                <p>Klas: 5B</p>

                <Footer />

            </div>

        </div>

    );

}

export default App;
