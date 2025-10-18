import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import alexaImage from "./images/alexa.png";
import cortanaImage from "./images/cortana.png";
import siriImage from "./images/siri.png";

function App() {
  return (
    <>
      <div>

      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistant</p>
        </div>
      </section>
       

        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-4">
                <ProfileCard
                  image={alexaImage}
                  name="Alexa"
                  handle="@alexa99"
                  title="Alexa is a virtual assistant AI technology"
                />
              </div>

              <div className="column is-4">
                <ProfileCard
                  image={siriImage}
                  name="Siri"
                  handle="@siri99"
                  title="Siri is a virtual assistant AI technology"
                />
              </div>

              <div className="column is-4">
                <ProfileCard
                  image={cortanaImage}
                  name="Cortana"
                  handle="@cortana99"
                  title="Cortana is a virtual assistant AI technology"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
