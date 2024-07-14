import AboutCard from "../../components/AboutCard/AboutCard";

import image from "../../assets/background.jpg";
import ananya from "../../assets/ananya.png";
import niklas from "../../assets/niklas.png";

import "./about.css";

// TODO: Optimize for mobile

function about() {
  return (
    <div className="aboutContainer">
      <h1 className="textBold">Das Team</h1>
      <div className="aboutCardsContainer">
        <AboutCard
          img={ananya}
          alt="Ananya"
          title="CEO, Ananya Timalsina"
          text="Mit 5 Jahren Erfahrung in Software, von Videospielen bis hin zu professionellen Websites, und als frühzeitiger Anwender und Enthusiast von KI bringe ich sowohl das technische Know-how als auch die kreative Vision an Bord, um Dressbase zu einem führenden Unternehmen in der Branche zu katapultieren."
        />
        <AboutCard
          img={image}
          alt="Luca"
          title="COO, Luca Augsten"
          text="Help me!"
        />
        <AboutCard
          img={niklas}
          alt="Niklas"
          title="CMO, Niklas Wenz"
          text="Mit mehrjähriger Erfahrung im Marketing und einer Leidenschaft für Innovation und Technologie gestalte ich die Marketingstrategie, die Dressbase zum Erfolg führt."
        />
        <AboutCard
          img={image}
          alt="Jonathan"
          title="CAO, Jonathan Zdebel"
          text="Help me!"
        />
        <AboutCard
          img={image}
          alt="Paul"
          title="CFO, Paul Schaut"
          text="Mit großer Leidenschaft für Geld und Zahlen leite ich den finanziellen Sektor von Dressbase und kümmere mich um Ausgaben und Einnahmen, damit unser Start-up auf finanziell starken Beinen steht."
        />
      </div>
    </div>
  );
}

export default about;
