import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

    return (

        <div className="container">

            <Header />

            <div className="games">

                <h2>Welkom bij mijn eerste React-applicatie!</h2>

                <p>Naam: Redouan Abouhcen</p>

                <p>Studentnummer: 2229629</p>

                <p>Klas: 5B</p>

                <Footer />

            </div>

        </div>

    );

}

export default App;
