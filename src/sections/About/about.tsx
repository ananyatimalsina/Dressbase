import AboutCard from "../../components/AboutCard/AboutCard";

import ananya from "../../assets/team/ananya.png";
import niklas from "../../assets/team/niklas.png";
import jonathan from "../../assets/team/jonathan.png";
import paul from "../../assets/team/paul.png";
import luca from "../../assets/team/luca.png";

import "./about.css";
import usePreloadImages from "../../usePreloadImages";

function about() {
  usePreloadImages([ananya, niklas, jonathan, paul, luca]);

  return (
    <div className="aboutContainer">
      <h1 className="heading">Das Team</h1>
      <div className="aboutCardsContainer">
        <AboutCard
          img={ananya}
          alt="Ananya"
          title="CEO, Ananya Timalsina"
          text="Mit 5 Jahren Erfahrung in Software, von Videospielen bis hin zu professionellen Websites, und als frühzeitiger Anwender und Enthusiast von KI bringe ich sowohl das technische Know-how als auch die kreative Vision an Bord, um Dressbase zu einem führenden Unternehmen in der Branche zu katapultieren."
        />
        <AboutCard
          img={niklas}
          alt="Niklas"
          title="CMO, Niklas Wenz"
          text="Mit mehrjähriger Erfahrung im Marketing und einer Leidenschaft für Innovation und Technologie gestalte ich die Marketingstrategie, die Dressbase zum Erfolg führt."
        />
        <AboutCard
          img={jonathan}
          alt="Jonathan"
          title="CAO, Jonathan Zdebel"
          text="Mit einem guten Händchen für Personen und Kommunikation leite ich den internen Austausch zwischen unseren Mitarbeitern und kümmere mich darum, dass Sie sich in unserer Firma wohlfühlen."
        />
        <AboutCard
          img={paul}
          alt="Paul"
          title="CFO, Paul Schaut"
          text="Mit großer Leidenschaft für Geld und Zahlen leite ich den finanziellen Sektor von Dressbase und kümmere mich um Ausgaben und Einnahmen, damit unser Start-up auf finanziell starken Beinen steht."
        />
        <AboutCard
          img={luca}
          alt="Luca"
          title="HoMR, Luca Augsten"
          text="Mit mehreren Jahren Erfahrung in der Marktforschung entwickle ich eine zielführende Strategie, um Dressbase mit seiner revolutionären Idee zum Erfolg zu führen."
        />
      </div>
    </div>
  );
}

export default about;
