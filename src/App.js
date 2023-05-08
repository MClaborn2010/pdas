import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import LeelaImage from "./Project Resources/leela.png";
import FryImage from "./Project Resources/fry1.png";
import BenderImage from "./Project Resources/bender.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">The Best of Futurama</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Leela"
                handle="@leelalovesyou"
                image={LeelaImage}
                description="Leela is a badass warrior with one eye!"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Fry"
                handle="@frymaster3000"
                image={FryImage}
                description="Fry is a pizza delivery man turned delivery man after accidentally locking himself in a cryo-chamber for a thousand years"

              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Bender"
                handle="@blackjackislife"
                image={BenderImage}
                description="Bender is a complete degenerate that somehow stays on the team due to his charm, humor, and occasional usefulness. "

              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
